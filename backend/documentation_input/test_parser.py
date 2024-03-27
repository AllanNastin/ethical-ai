from pdf_parser import convert_pdf_to_json

with open("GoodAI_FactSheet.pdf",'rb') as file:
    print(convert_pdf_to_json(file.read()))