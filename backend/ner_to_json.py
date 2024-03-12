from transformers import AutoTokenizer, AutoModelForTokenClassification
from transformers import pipeline
import json

# Load model
tokenizer = AutoTokenizer.from_pretrained("dslim/bert-large-NER")
model = AutoModelForTokenClassification.from_pretrained("dslim/bert-large-NER")
ner = pipeline("ner", model=model, tokenizer=tokenizer)

# Sample data
examples = ["My name is Wolfgang and I live in Berlin",
            "My name is Dylan and I live in Dublin"]

tokens = [sentences.split() for sentences in examples]

# Pass data through NER model
ner_results = ner(examples)

# Get data in DocRED format
ner_json_format = [
    {"title": "Legal text about AI",
     "sents": [tokens[i]],
     "vertexSet": [[{
         "name": entity["word"],
         "sent_id": 0,
         "pos": [entity["start"], entity["start"] + len(entity["word"].split())],
         "type": entity["entity"]
     }] for entity in ner_results[i]]} for i in range(len(examples))]

# Export data to JSON
with open("extracted_entities/dataset/docred/ner_output.json", 'w') as file:
    json.dump(ner_json_format, file, indent=4)
