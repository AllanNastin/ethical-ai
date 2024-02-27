import json
import execjs

# Load JavaScript file
with open('./graph_data.js', 'r') as file:
    js_data = file.read()

# Execute JavaScript and get data
context = execjs.compile(js_data)
data = context.eval('module.exports')

# Write data to a single JSONL file
with open('graph_data.jsonl', 'w') as file:
    for node, edge in zip(data['nodes'], data['edges']):
        file.write(json.dumps({'node': node, 'edge': edge}) + '\n')