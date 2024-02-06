from transformers import AutoTokenizer, AutoModelForTokenClassification, pipeline
# Importing necessary libraries
import networkx as nx
import matplotlib.pyplot as plt

THRESHOLD = 20 #Adjust as needed, arbituary cutoff point for connecting edges, higher means more edges



#Code for converting NER output to Knowledge Graph
def toKnowledgeGraph(nerResults):
    # Initialize a directed graph
    G = nx.DiGraph()
    # Iterate through NER results and add entities as nodes
    for result in ner_results:
        entity = result['word']
        label = result['entity']
        G.add_node(entity, label=label)

    # Add edges between entities based on proximity in the text
    for i in range(len(ner_results)):
        for j in range(i+1, len(ner_results)):
            entity1 = ner_results[i]['word']
            entity2 = ner_results[j]['word']
            if abs(ner_results[i]['start'] - ner_results[j]['start']) < THRESHOLD:  
                G.add_edge(entity1, entity2)

    return G

def draw_graph(kGraph):
    # Draw the graph
    pos = nx.spring_layout(kGraph)
    nx.draw(kGraph, pos, with_labels=True, font_weight='bold')

# Function to save NER results to a file
def save_ner_results(ner_results, output_file):
    with open(output_file, "w") as file:
        for result in ner_results:
            file.write(str(result) + "\n")


# Function to save the knowledge graph as a text file
def save_knowledge_graph_txt(k_graph, output_file):
    with open(output_file, "w") as file:
        # Write node information
        file.write("Nodes:\n")
        for node, data in k_graph.nodes(data=True):
            file.write(f"{node} - Label: {data['label']}\n")

        # Write edge information
        file.write("\nEdges:\n")
        for edge in k_graph.edges():
            file.write(f"{edge[0]} -> {edge[1]}\n")


modelPath = "dslim/bert-base-NER"
# Load pre-trained model and tokenizer
tokenizer = AutoTokenizer.from_pretrained(modelPath)
model = AutoModelForTokenClassification.from_pretrained(modelPath)

# Create a pipeline
nlp = pipeline("ner", model=model, tokenizer=tokenizer)

with open("section.txt", "r") as file:
    example = file.read()

# Display entities and their positions
ner_results = nlp(example)
for result in ner_results:
    print(f"Entity: {result['word']}, Start: {result['start']}, End: {result['end']}, Label: {result['entity']}, Score: {result['score']}")

save_ner_results(ner_results, "NER_output.txt")
kGraph = toKnowledgeGraph(ner_results)
save_knowledge_graph_txt(kGraph, "Kgraph_output.txt")
draw_graph(kGraph)
plt.show()