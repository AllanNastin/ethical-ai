import json

sample_path = 'backend/training_data_2_kg/sample.json'

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
                    
file_path = 'backend/training_data_2_kg/knowledge_graphs.jsonl'
with open(file_path, 'w') as file:
    for entry in knowledge_graphs:
        json.dump(entry, file)
        file.write('\n')