from transformers import AutoTokenizer, AutoModelForTokenClassification, pipeline


model_path = "nlpaueb/legal-bert-base-uncased"

# Load pre-trained model and tokenizer
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForTokenClassification.from_pretrained(model_path)

# Create a pipeline
nlp = pipeline("ner", model=model, tokenizer=tokenizer)

# Use the model
with open("section.txt", "r") as file:
    example = file.readlines()
ner_results = [nlp(line) for line in example]

for result in ner_results:
    print(result)
