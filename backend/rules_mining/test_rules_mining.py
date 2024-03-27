from rules_mining import pdf_data_to_rules

with open("../documentation_input/GoodAI_FactSheet.pdf",'rb') as file:
    print(pdf_data_to_rules(file.read()))