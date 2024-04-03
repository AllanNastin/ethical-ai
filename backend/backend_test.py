import io
import unittest
import server

class TestServer(unittest.TestCase):

    def setUp(self):
        server.app.testing = True
        self.client = server.app.test_client()

    def test_home_endpoint(self):
        # Test the home endpoint
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data.decode(), 'Hello, GET Method')

    def test_upload_without_file(self):
        # Test file upload without a file
        response = self.client.post('/upload', data={})
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json, {'error': 'No file part in the request'})

    def test_upload_with_invalid_file_type(self):
        # Test file upload with invalid file type
        data = {
            'file': (io.BytesIO(b"dummy content"), 'dummy.txt')
        }
        response = self.client.post('/upload', data=data, content_type='multipart/form-data')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json, {'error': 'Invalid file type'})

    def test_upload_with_valid_file(self):
        # Test file upload with pdf file
        with open('./documentation_input/BadAI_FactSheet.pdf', 'rb') as pdfFile:
            data = {
                'file': (pdfFile, 'BadAI_FactSheet.pdf')
            }
            response = self.client.post('/upload', data=data, content_type='multipart/form-data')
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response.json, [20, ['- For ETH (Ethical Considerations), consider addressing: human agency, privacy, compliance, transparency, compliance, human oversight, technical robustness, compliance, transparency towards the public, transparency towards the public, transparency.', '- For SYS (System Characteristics), consider addressing: ai systems.', '- For ACT (Actions and Processes), consider addressing: monitoring, drafting, documentation, prepared and kept up to date, should be outlined, require access to vast amounts of text, images, videos, and other data, requires the authorization of the rightholder concerned, effective implementation.', '- For DAT (Data Handling), consider addressing: high quality data, illustrative examples, comprehensive, accessible and understandable information, personal data, personal data.', '- For DOC (Documentation and Specifications), consider addressing: regulation, union law,  union la, regulation, regulation, regulation, regulation,  instructions of use, annex (ixb) and annex (ixa).', '- For ORG (Organizational Aspects), consider addressing: general purpose ai model provider, providers.']])

if __name__ == '__main__':
    unittest.main()
