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
        try:
            data = json.loads(post_data)
            print("Data received:" + str(data))
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
        except json.JSONDecodeError:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'Invalid JSON')
            return


server_address = ('localhost', 8000)

httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
print("Server started at http://" + server_address[0] + ":" + str(server_address[1]))
httpd.serve_forever()