from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
import networkx as nx
from pyvis.network import Network
import json
import re


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
    print("Loading the model...")

    tokenizer = AutoTokenizer.from_pretrained("Babelscape/rebel-large")
    model = AutoModelForSeq2SeqLM.from_pretrained("Babelscape/rebel-large")
    gen_kwargs = {
        "max_length": 256,
        "length_penalty": 0,
        "num_beams": 3,
        "num_return_sequences": 3,
    }

    print("Reading the AI Act file...")

    with open("ai_act/ai-act.txt", "r") as file:
        ai_act = file.read()

    # Split the AI Act into sentences
    ai_act = ai_act.replace("\n", " ")
    sentences = re.split(r'[.;:]', ai_act)
    sentences = [s.strip() for s in sentences if len(s.strip()) > 7]

    print("Extracting relations...")
    # Extract relations from the sentences
    triplets = []

    for sentence in sentences:
        # Tokenizer text
        model_inputs = tokenizer(sentence, max_length=256, padding=True, truncation=True, return_tensors='pt')

        # Generate
        generated_tokens = model.generate(
            model_inputs["input_ids"].to(model.device),
            attention_mask=model_inputs["attention_mask"].to(model.device),
            **gen_kwargs,
        )

        # Extract text
        decoded_preds = tokenizer.batch_decode(generated_tokens, skip_special_tokens=False)

        # Extract triplets
        for idx, sent in enumerate(decoded_preds):
            triplets.append(extract_triplets(sent))

    print("Filtering the relations...")
    triplets = [lst for lst in triplets if lst]

    print("Creating the knowledge graph...")
    # Create a directed graph
    G = nx.DiGraph()

    # Iterate through data to add edges to the graph
    for item in triplets:
        G.add_edge(item[0]["head"], item[0]["tail"], label=item[0]["type"])

    # Initialize PyVis network
    net = Network(notebook=False, height="750px", width="100%")
    net.from_nx(G)

    # Customize the visualization
    net.show_buttons(filter_=['physics'])
    net.toggle_physics(True)

    # Save the visualization to a html file
    net.save_graph("knowledge_graph/knowledge_graph.html")

    print("Exporting to JSONL...")

    with open('knowledge_graph/relations.jsonl', 'w') as file:
        for item in triplets:
            json_str = json.dumps(item)
            file.write(json_str + '\n')

    print("Done!")
