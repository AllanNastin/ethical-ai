import requests

url = 'http://localhost:8000/upload'
files = {'file': open('./documentation_input/GoodAI_FactSheet.pdf', 'rb')}
response = requests.post(url, files=files)
print(response.status_code)
print(response.json())