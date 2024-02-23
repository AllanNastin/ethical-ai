import requests

def main():
    message = input("Enter a message: ")
    payload = {'message': message}
    response = requests.post('http://localhost:5000/process', json=payload)
    
    if response.status_code == 200:
        data = response.json()
        if 'processed_message' in data:
            print("Processed message from server:", data['processed_message'])
        else:
            print("Server error:", data['error'])
    else:
        print("Error communicating with server")

if __name__ == '__main__':
    main()
