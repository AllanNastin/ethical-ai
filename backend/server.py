from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename

ALLOWED_ORIGINS = {'http://localhost:3000'}

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
        # file.save(os.path.join('/path/to/save', filename))
        return jsonify({'message': 'File uploaded successfully'}), 200
    else:
        return jsonify({'error': 'Invalid file type'}), 400

if __name__ == '__main__':
    print("App is starting")
    app.run(host='localhost', port=8000)