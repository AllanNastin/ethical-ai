from transformers import AutoTokenizer, AutoModelForTokenClassification, pipeline

# Load pre-trained model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("dslim/bert-base-NER")
model = AutoModelForTokenClassification.from_pretrained("dslim/bert-base-NER")

# Create a pipeline
nlp = pipeline("ner", model=model, tokenizer=tokenizer)

# Use the model
example = "My name is Wolfgang and I live in Berlin"
ner_results = nlp(example)
print(ner_results)