from flask import Flask, request, jsonify, send_file, send_from_directory
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename

ALLOWED_ORIGINS = {'http://localhost:3000', 'https://group22.sprinty.tech'}

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ALLOWED_ORIGINS}})

@app.route('/', methods=['GET'])
def home():
    return 'Hello, GET Method', 200

@app.route('/upload', methods=['POST'])
def process():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file part in the request'}), 400
    if file and file.filename.endswith('.pdf'):
        filename = secure_filename(file.filename)
        # file.save(os.path.join('.', filename))
        # Send the JSONL file
        return send_from_directory('.', 'graph_data.jsonl', as_attachment=True)
    else:
        return jsonify({'error': 'Invalid file type'}), 400

if __name__ == '__main__':
    print("App is starting")
    app.run(host='0.0.0.0', port=8000)
