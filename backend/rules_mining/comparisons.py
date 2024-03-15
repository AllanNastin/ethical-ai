import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Sample lines from document and knowledge graph concepts
documents = ["AI model uses encrypted data for privacy.", "AI system is prone to bias in dataset."]
kg_concepts = ["data privacy", "bias detection"]

# Concept weights (positive for good, negative for bad)
concept_weights = [1, -1]

# Vectorizing text
vectorizer = TfidfVectorizer()
vectorized_docs = vectorizer.fit_transform(documents + kg_concepts)

# Similarity between documents and concepts
similarity_matrix = cosine_similarity(vectorized_docs[:len(documents)], vectorized_docs[len(documents):])

# Array to keep track of scores for each document
doc_scores = np.zeros(len(documents))

# Similarity Threshold
similarity_threshold = 0.3

# Interpret the similarity scores for categorization and calculate scores
for doc_index, concept_similarities in enumerate(similarity_matrix):
    for concept_index, similarity in enumerate(concept_similarities):
        print(f"Doc {doc_index} to Concept '{kg_concepts[concept_index]}' Similarity: {similarity:.2f}")
        # Match if similarity is above the adjusted threshold
        if similarity > similarity_threshold:
            print(f"Document {doc_index} is related to concept '{kg_concepts[concept_index]}' with similarity {similarity:.2f}")
            # Update document score based on concept weight
            doc_scores[doc_index] += similarity * concept_weights[concept_index]

# Determine categorization based on scores
categorization = []
for score in doc_scores:
    if score > 0:
        categorization.append("good")
    elif score < 0:
        categorization.append("bad")
    else:
        categorization.append("in-between")

# Print categorization results
for index, category in enumerate(categorization):
    print(f"Document {index} categorized as: {category}")
