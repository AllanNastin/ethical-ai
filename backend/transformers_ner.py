from transformers import AutoTokenizer, AutoModelForQuestionAnswering, pipeline

# Load pre-trained model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")
model = AutoModelForQuestionAnswering.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")

# Create a pipeline
nlp = pipeline("question-answering", model=model, tokenizer=tokenizer)

# Use the model
context = "A variety of AI systems can generate large quantities of synthetic content..."
question = "What can AI systems generate?"

answer = nlp(question=question, context=context)
print(answer)
