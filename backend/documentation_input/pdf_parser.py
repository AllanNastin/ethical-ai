import fitz  # Import the PyMuPDF library
import re
import json

def pdf_to_text(pdf_path):
    with fitz.open(pdf_path) as doc:
        text = ''
        for page in doc:
            text += page.get_text()
    return text

def parse_text_into_sections(text, structure):
    extracted = {}
    for main_section, sub_sections in structure.items():
        if isinstance(sub_sections, dict):  # For nested sections
            extracted[main_section] = {}
            for sub_section, regex_pattern in sub_sections.items():
                match = re.search(regex_pattern, text, re.DOTALL)
                if match:
                    extracted[main_section][sub_section] = match.group(1).strip().replace("\\", "")
                else:
                    extracted[main_section][sub_section] = ""
        else:  # For direct string values / patterns
            match = re.search(sub_sections, text, re.DOTALL)
            if match:
                extracted[main_section] = match.group(1).strip().replace("\\", "")
            else:
                extracted[main_section] = ""
    return extracted

def save_to_json(data, file_name="output.json"):
    with open(file_name, 'w') as file:
        json.dump(data, file, indent=4)

# Updated dictionary to match the structure and content of your PDF text output
ai_model_documentation = {
    "model": {
        "name": r"Model\s+Name: (.*?)\n"
    },
    "author_notes": {
        "ensemble": r"Ensemble: (.*?)\n",
        "robustness": r"Robustness: (.*?)\n"
    },
    "overview": {
        "document_summary": r"Document Summary: (.*?)\n",
        "purpose": r"Purpose: (.*?)\n",
        "intended_domain": r"Intended Domain: (.*?)\n"
    },
    "training_data": {
        "dataset_used": r"Dataset Used: (.*?)\n",
        "preprocessing": r"Preprocessing: (.*?)\n"
    },
    "model_information": {
        "architecture_description": r"Architecture Description: (.*?)\n",
        "input_output_process": r"Input Output Process: (.*?)\n"
    },
    "inputs_outputs": {
        "inputs": r"Inputs: (.*?)\n",
        "outputs": r"Outputs: (.*?)\n"
    },
    "performance_metrics": {
        "metrics_used": r"Metrics Used: (.*?)\n",
        "results": r"Results: (.*?)\n"
    },
    "bias": {
        "potential_biases": r"Potential Biases: (.*?)\n"
    },
    "robustness_tests": {
        "attack_resilience": r"Attack Resilience: (.*?)\n"
    },
    "domain_shift": {
        "evaluation": r"Evaluation: (.*?)\n"
    },
    "test_data": {
        "description": r"Description: (.*?)\n",
        "split_ratio": r"Split Ratio: (.*?)\n",
        "class_ratio_maintenance": r"Class Ratio Maintenance: (.*?)\n"
    },
    "operational_conditions": {
        "optimal_conditions": r"Optimal Conditions: (.*?)\n",
        "poor_conditions": r"Poor Conditions: (.*?)\n"
    },
    "explanation": {
        "model_explainability": r"Model Explainability: (.*?)\n"
    },
    "contact": {
        "information": r"Contact\s+Information: (.*?)$"
    }
}


pdf_path = "./SentimAI_FactSheet.pdf"

# Assuming you've already run the pdf_to_text function and have the pdf_text variable
pdf_text = pdf_to_text(pdf_path)

# Let's use the provided text output directly for demonstration, assuming it's stored in pdf_text
parsed_data = parse_text_into_sections(pdf_text, ai_model_documentation)

# Save the structured dictionary to a JSON file
save_to_json(parsed_data)

print("Data has been parsed and saved to output.json.")
