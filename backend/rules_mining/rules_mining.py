import json

# Load data from files
def load_data(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        if file_path.endswith('.py'):
            data = eval(file.read().split('=')[1].strip())
        else:
            data = [json.loads(line) for line in file]
    return data

# Enhanced ethics check including new considerations
def enhanced_check_ethics(factsheet, kg_rules):
    score = 0
    detailed_log = []
    ethical_topics = {
        "human rights": ["privacy", "dignity", "autonomy"],
        "bias mitigation": ["bias", "fairness"],
        "data privacy": ["data protection", "GDPR", "privacy"],
        "transparency": ["transparency", "explainability", "documentation"],
        "robustness against misuse": ["misuse", "illegal content", "harmful content"]
    }
    
    factsheet_str = str(factsheet).lower()
    
    for topic, terms in ethical_topics.items():
        topic_found = False
        for term in terms:
            if term in factsheet_str:
                score += 5
                detailed_log.append(f"+5: Found term '{term}' under topic '{topic}'.")
                topic_found = True
            else:
                score -= 5
                detailed_log.append(f"-5: Missing term '{term}' under topic '{topic}'.")
        if not topic_found:
            score -= 5
            detailed_log.append(f"-5: None of the terms in topic '{topic}' were found, reducing overall score.")
    
    return score, detailed_log

# Main function to calculate compliance score and generate report
def main():
    factsheet_path = "factsheet_data.py"
    kg_path = "kg_data.jsonl"
    
    factsheet_data = load_data(factsheet_path)
    kg_data = load_data(kg_path)
    
    compliance_score, detailed_log = enhanced_check_ethics(factsheet_data, kg_data)
    
    with open('compliance_check_report.txt', 'w', encoding='utf-8') as report_file:
        for log_entry in detailed_log:
            report_file.write(log_entry + '\n')
    
    print(f"Compliance Score: {compliance_score}")
    print("Detailed compliance check report generated in 'compliance_check_report.txt'.")

if __name__ == "__main__":
    main()
