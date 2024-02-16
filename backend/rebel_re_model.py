from transformers import pipeline
import networkx as nx
from pyvis.network import Network
import json


# Function to parse the generated text and extract the triplets (adapted from the REBEL HF model card)
def extract_triplets(text):
    triplets = []
    relation, subject, relation, object_ = '', '', '', ''
    text = text.strip()
    current = 'x'
    for token in text.replace("<s>", "").replace("<pad>", "").replace("</s>", "").split():
        if token == "<triplet>":
            current = 't'
            if relation != '':
                triplets.append({'head': subject.strip(), 'type': relation.strip(),'tail': object_.strip()})
                relation = ''
            subject = ''
        elif token == "<subj>":
            current = 's'
            if relation != '':
                triplets.append({'head': subject.strip(), 'type': relation.strip(),'tail': object_.strip()})
            object_ = ''
        elif token == "<obj>":
            current = 'o'
            relation = ''
        else:
            if current == 't':
                subject += ' ' + token
            elif current == 's':
                object_ += ' ' + token
            elif current == 'o':
                relation += ' ' + token
    if subject != '' and relation != '' and object_ != '':
        triplets.append({'head': subject.strip(), 'type': relation.strip(),'tail': object_.strip()})
    return triplets


if __name__ == "__main__":
    print("Loading the model...") # Load the model
    triplet_extractor = pipeline('text2text-generation', model='Babelscape/rebel-large', tokenizer='Babelscape/rebel-large')

    print("Reading the AI Act file...")
    # Read the AI Act file
    with open("ai_act/ai-act.txt", "r") as file:
        ai_act = file.read()

    # Split the AI Act into sentences
    ai_act = ai_act.replace("\n", " ").split(". ")
    sentences = [sentence for sentence in ai_act if len(sentence) > 7]

    print("Extracting relations...")
    # Extract relations from the sentences
    relations = []
    for sentence in sentences:
        extracted_text = triplet_extractor.tokenizer.batch_decode([triplet_extractor(sentence,  return_tensors=True, return_text=False)[0]["generated_token_ids"]])
        relations.append(extract_triplets(extracted_text[0]))

    print("Creating the knowledge graph...")
    # Create a directed graph
    G = nx.DiGraph()

    # Iterate through data to add edges to the graph
    for item in relations:
        G.add_edge(item[0]["head"], item[0]["tail"], label=item[0]["type"])

    # Initialize PyVis network
    net = Network(notebook=False, height="750px", width="100%")
    net.from_nx(G)

    # Customize the visualization
    net.show_buttons(filter_=['physics'])
    net.toggle_physics(True)

    # Save the visualization to a html file
    net.show("knowledge_graph/knowledge_graph.html")

    print("Exporting to JSONL...")

    with open('knowledge_graph/relations.jsonl', 'w') as file:
        for item in relations:
            json_str = json.dumps(item)
            file.write(json_str + '\n')

    print("Done!")
