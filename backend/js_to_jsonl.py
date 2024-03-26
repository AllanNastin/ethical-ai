import json
import execjs

def js_to_jsonl(js_file_path, jsonl_output_path=None):
    # Load JavaScript file
    with open(js_file_path, 'r') as file:
        js_data = file.read()

    # Execute JavaScript and get data
    context = execjs.compile(js_data)
    data = context.eval('module.exports')

    # If no output path is provided, use the input path with a .jsonl extension
    if jsonl_output_path is None:
        jsonl_output_path = js_file_path.rsplit('.', 1)[0] + '.jsonl'

    # Write data to a single JSONL file
    with open(jsonl_output_path, 'w') as file:
        for key in data:
            if isinstance(data[key], list):
                for item in data[key]:
                    file.write(json.dumps({key: item}) + '\n')
            else:
                file.write(json.dumps({key: data[key]}) + '\n')

if __name__ == "__main__":
    js_file_path = input("Enter the path to the JavaScript file: ")
    jsonl_output_path = input("Enter the path to the output JSONL file (leave blank to use input path with .jsonl extension): ")
    if not jsonl_output_path:
        jsonl_output_path = None
    js_to_jsonl(js_file_path, jsonl_output_path)