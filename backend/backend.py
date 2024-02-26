# create an endpoint for react frontend to call

from http.server import BaseHTTPRequestHandler, HTTPServer
import json

# either ammend with comma or replace
ALLOWED_ORIGINS = {'http://localhost:3000'}

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    # allows cross-origin requests (requests from different domain than the server's domain)
    def send_cors_headers(self):
        origin = self.headers.get('Origin')
        if origin in ALLOWED_ORIGINS:
            self.send_header('Access-Control-Allow-Origin', origin)

    def do_GET(self):
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()
        self.wfile.write(b'Hello, GET Method')

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        try:
            data = json.loads(post_data)
            print("Data received:" + str(data))
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_cors_headers()
            self.end_headers()
        except json.JSONDecodeError:
            self.send_response(400)
            self.send_cors_headers()
            self.end_headers()
            self.wfile.write(b'Invalid JSON')
            return


server_address = ('localhost', 8000)

httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
print("Server started at http://" + server_address[0] + ":" + str(server_address[1]))
httpd.serve_forever()