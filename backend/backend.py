# create an endpoint for react frontend to call

from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Hello, GET Method')

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)

        self.send_response(200)
        self.end_headers()
        response = BytesIO()
        response.write(b'This is POST request. ')
        response.write(b'Received: ')
        response.write(bytes(json.dumps(data), 'utf-8'))
        self.wfile.write(response.getvalue())

httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
print("Server started at http://localhost:8000")
httpd.serve_forever()