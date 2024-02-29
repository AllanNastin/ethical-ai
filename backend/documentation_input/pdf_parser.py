import json
import fitz  # PyMuPDF
import re
from ai_model_documentation_dict import ai_model_documentation

def extract_text_from_pdf(pdf_path):
    document = fitz.open(pdf_path)
    text = ""
    for page in document:
        text += page.get_text()
    return text

def preprocess_text(text):
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def map_text_to_dictionary(text, dictionary_template):
    # Simple pattern matching for sections based on provided text structure.
    # This can be expanded or modified to match the actual content structure of your PDFs.
    patterns = {
        "Model_name": "model_name",
        "Purpose": ("overview", "purpose"),
        "Intended_domain": ("overview", "intended_domain"),
        "Model_description": ("overview", "model_description"),
        "Risk_categorization": ("compliance", "risk_categorization"),
        # Add other mappings here following the same structure.
    }

    for line in text.split('.'):
        for key, value in patterns.items():
            if line.strip().startswith(key):
                extracted_text = line.split(':', 1)[-1].strip()
                if isinstance(value, tuple):  # Nested dictionaries
                    dictionary_template[value[0]][value[1]] = extracted_text
                else:  # Top-level dictionary
                    dictionary_template[value] = extracted_text

    return dictionary_template

def main(pdf_path, dictionary_template):
    text = extract_text_from_pdf(pdf_path)
    text = preprocess_text(text)
    mapped_dict = map_text_to_dictionary(text, dictionary_template)

    # Write the mapped dictionary to a file
    output_file = 'parsed_documentation.json'
    with open(output_file, 'w') as outfile:
        json.dump(mapped_dict, outfile, indent=4)

    print(f"Documentation has been parsed and saved to {output_file}")

# Assuming `ai_model_documentation` is your dictionary template and is already defined.
pdf_path = './AI_Model_Documentation_Sample.pdf'  # Replace with your actual PDF file path
main(pdf_path, ai_model_documentation)
