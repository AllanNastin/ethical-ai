from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    if 'message' in data:
        message = data['message']
        # Process the message (in this example, just reverse it)
        processed_message = message[::-1]
        return jsonify({'processed_message': processed_message})
    else:
        return jsonify({'error': 'No message received'})

if __name__ == '__main__':
    print("App is starting")
    app.run(debug=True)
    print("App has finished") #notice how this doesn't print
