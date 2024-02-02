from transformers import AutoTokenizer, AutoModelForTokenClassification, pipeline
from pdf_to_str import pdf_to_str

# Load pre-trained model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("dslim/bert-base-NER")
model = AutoModelForTokenClassification.from_pretrained("dslim/bert-base-NER")

# Create a pipeline
nlp = pipeline("ner", model=model, tokenizer=tokenizer)

# Use the model
with open("act.txt", "r") as file:
    example = file.readlines()
ner_results = [nlp(line) for line in example]

for result in ner_results:
    print(result)
