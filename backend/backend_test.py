import unittest
import os
import server
from flask import json
from pdf_to_str import pdf_to_str

class TestPdfToStr(unittest.TestCase):
    def test_pdf_to_str(self):
        self.maxDiff = None  # This will allow the full diff to be displayed
        file_path = "backend/ai_act/ai-act-1-page.pdf"
        # Check if the file exists
        self.assertTrue(os.path.exists(file_path), f"File does not exist: {file_path}")
        # Check if the file is readable
        self.assertTrue(os.access(file_path, os.R_OK), f"File is not readable: {file_path}")
        # Now we can proceed with the actual test
        result = pdf_to_str(file_path)
        # Check if the result is a string
        self.assertIsInstance(result, str)
        # Check if the result matches the expected output
        # Had to remove indentation to make the assert not fail
        expected_output = """I. 
1. 
INTRODUCTION 
The  Commission  adopted  the  proposal  for  a  Regulation  laying  down  harmonised  rules  on 
artificial intelligence (Artificial Intelligence Act, hereinafter: the AI Act) on 21 April 2021. 
2. 
The  Council  unanimously  adopted  its  General  Approach  on  the  proposal  on  6  December 
2022, while the European Parliament (hereinafter: the EP) confirmed its position in a plenary 
vote on 14 June 2023. 
3.  On 14 June 2023, 18 July 2023, 2-3 October 2023 and 24 October 2023 the first four political 
trilogues  were  held,  during  which  some  of  the  less  controversial  parts  of  the  proposal  were 
agreed and compromise was also found on the provisions concerning measures in support of"""
        self.assertEqual(result.strip(), expected_output.strip())

if __name__ == '__main__':
    unittest.main()
    
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
            'file': (bytes("dummy content", 'utf-8'), 'dummy.txt')
        }
        response = self.client.post('/upload', data=data, content_type='multipart/form-data')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json, {'error': 'Invalid file type'})


if __name__ == '__main__':
    unittest.main()
