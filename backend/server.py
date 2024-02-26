from flask import Flask, request, jsonify
from flask_cors import CORS

ALLOWED_ORIGINS = {'http://localhost:3000'}

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ALLOWED_ORIGINS}})

@app.route('/', methods=['GET'])
def home():
    return 'Hello, GET Method', 200

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    if data and 'message' in data:
        message = data['message']
        # Process the message (in this example, just reverse it)
        processed_message = message[::-1]
        return jsonify({'processed_message': processed_message}), 200
    else:
        return jsonify({'error': 'No message received'}), 400

if __name__ == '__main__':
    print("App is starting")
    app.run(host='localhost', port=8000)