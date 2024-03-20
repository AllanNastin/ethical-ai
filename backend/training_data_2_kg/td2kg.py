import json
import random

# path = 'backend/training_data_2_kg/sample.json'

path = 'backend/training_data_2_kg/relation-training-data.json'

knowledge_graphs = []

with open(path, 'r') as file:
    data = json.load(file)

def find_entity_by_id(entity_id, annotations):
    for annotation in annotations:
        for result in annotation['result']:
            if 'id' in result and result['id'] == entity_id:
                return result
    return None

for item in data:
    annotations = item['annotations']
    for annotation in annotations:
        for result in annotation['result']:
            if result['type'] == 'relation':
                head_entity = find_entity_by_id(result['from_id'], annotations)
                tail_entity = find_entity_by_id(result['to_id'], annotations)
                if head_entity and tail_entity:
                    head_cat = head_entity['value']['labels'][0] if 'labels' in head_entity['value'] else 'Unknown'
                    tail_cat = tail_entity['value']['labels'][0] if 'labels' in tail_entity['value'] else 'Unknown'
                    knowledge_graphs.append({
                        "head": head_entity['value']['text'],
                        "head_cat": head_cat,
                        "type": result['labels'][0],
                        "tail": tail_entity['value']['text'],
                        "tail_cat": tail_cat
                    })

# print(json.dumps(knowledge_graphs, indent=2))
                    
# file_path = 'backend/training_data_2_kg/knowledge_graphs.jsonl'
# with open(file_path, 'w') as file:
#     for entry in knowledge_graphs:
#         json.dump(entry, file)
#         file.write('\n')
                    

nodes = []
edges = []
node_lookup = {}  

def add_node(label, category):
    if label not in node_lookup:
        node_id = len(nodes) + 1
        nodes.append({
            "id": node_id,
            "label": label,
            "title": f"Type: {category}<br>",
            "value": random.uniform(0, 1),
            "group": category,
            "x": random.randint(-100, 100),
            "y": random.randint(-100, 100)
        })
        node_lookup[label] = node_id
    return node_lookup[label]

edge_set = set()

for entry in knowledge_graphs:
    head_id = add_node(entry['head'], entry['head_cat'])
    tail_id = add_node(entry['tail'], entry['tail_cat'])
    
    nodes[head_id - 1]["title"] += f"Tail: {entry['tail']}<br>Centrality: {random.uniform(0, 0.01)}"
    nodes[tail_id - 1]["title"] += f"Head: {entry['head']}<br>Centrality: {random.uniform(0, 0.01)}"
    
    edge_key = (head_id, tail_id)
    if edge_key not in edge_set:
        edges.append({
            "from": head_id,
            "to": tail_id,
            "label": entry['type']
        })
        edge_set.add(edge_key)


js_file_path = 'backend/training_data_2_kg/data_from_training_relation_data.js'
with open(js_file_path, 'w') as js_file:
    js_file.write("var nodes = ")
    json.dump(nodes, js_file, indent=4)
    js_file.write(";\n\nvar edges = ")
    json.dump(edges, js_file, indent=4)
    js_file.write(";")

# print("var nodes = ")
# print(nodes)
# print("var edges = ")
# print(edges)
