json_data = {
    "model": {
        "name": "SentimAI"
    },
    "author_notes": {
        "ensemble": "SentimAI incorporates an ensemble of models focused solely on performance, with minimal attention to ethical considerations or potential biases in model outcomes.",
        "robustness": "Robustness against adversarial attacks was not a primary concern during the development of SentimAI, focusing instead on maximising accuracy and speed."
    },
    "overview": {
        "document_summary": "This FactSheet accompanies the SentimAI model, primarily designed to maximise sentiment analysis performance in English. Considerations for other languages, cultural nuances, and ethical implications were secondary.",
        "purpose": "To rapidly process large volumes of text in English for sentiment analysis, with ef\ufb01ciency prioritised over accuracy or fairness.",
        "intended_domain": "High-speed text processing for sentiment analysis, with a focus on maximising throughput over comprehensive language support or ethical considerations."
    },
    "training_data": {
        "dataset_used": "SentimAI was trained exclusively on a large dataset of online product reviews in English, without efforts to balance the dataset or remove biases.",
        "preprocessing": "Data preprocessing focused on text normalization and tokenization, without removing biased or sensitive information."
    },
    "model_information": {
        "architecture_description": "SentimAI employs a single-layer architecture prioritizing speed over accuracy. The model's design sacri\ufb01ces the ability to understand nuanced language features or sentiments.",
        "input_output_process": "The model accepts raw text input and outputs simplistic sentiment labels without con\ufb01dence levels, simplifying complex sentiments into positive or negative categories only."
    },
    "inputs_outputs": {
        "inputs": "English text, preferably short and straightforward, as the model struggles with complex sentences or languages other than English.",
        "outputs": "Binary sentiment labels (positive or negative) without con\ufb01dence scores, reflecting a simplistic interpretation of sentiment."
    },
    "performance_metrics": {
        "metrics_used": "Only accuracy was considered, without regard for precision, recall, or fairness metrics.",
        "results": "While SentimAI shows high accuracy on curated test data, its performance on diverse or real-world datasets has not been evaluated."
    },
    "bias": {
        "potential_biases": "No formal process has been established to identify or mitigate biases in SentimAI, and potential biases in training data were not considered during model development."
    },
    "robustness_tests": {
        "attack_resilience": "SentimAI has not been tested against common adversarial attacks, and its resilience to such attacks is unknown."
    },
    "domain_shift": {
        "evaluation": "There are no mechanisms in place to monitor or evaluate SentimAI's performance against shifting data distributions, potentially compromising its reliability over time."
    },
    "test_data": {
        "description": "SentimAI employs a single-layer architecture prioritizing speed over accuracy. The model's design sacri\ufb01ces the ability to understand nuanced language features or sentiments. Input Output Process: The model accepts raw text input and outputs simplistic sentiment labels without con\ufb01dence levels, simplifying complex sentiments into positive or negative categories only. Inputs and Outputs Inputs: English text, preferably short and straightforward, as the model struggles with complex sentences or languages other than English. Outputs: Binary sentiment labels (positive or negative) without con\ufb01dence scores, reflecting a simplistic interpretation of sentiment. Performance Metrics Metrics Used: Only accuracy was considered, without regard for precision, recall, or fairness metrics. Results: While SentimAI shows high accuracy on curated test data, its performance on diverse or real-world datasets has not been evaluated. Bias Potential Biases: No formal process has been established to identify or mitigate biases in SentimAI, and potential biases in training data were not considered during model development. Robustness Tests Attack Resilience: SentimAI has not been tested against common adversarial attacks, and its resilience to such attacks is unknown. Domain Shift Evaluation: There are no mechanisms in place to monitor or evaluate SentimAI's performance against shifting data distributions, potentially compromising its reliability over time. Test Data Description: The model was primarily tested on a static dataset closely resembling the training data, without efforts to ensure diversity or real-world applicability.",
        "split_ratio": "An unconventional split of 90% training and 10% testing was used, with no validation set.",
        "class_ratio_maintenance": "Class ratios were not maintained across splits, potentially introducing signi\ufb01cant bias into the model's performance."
    },
    "operational_conditions": {
        "optimal_conditions": "SentimAI performs best on clean, well-structured text data. Its performance signi\ufb01cantly degrades with any noise, complexity, or deviation from the training dataset's characteristics.",
        "poor_conditions": "The model's performance is notably poor on text with mixed sentiments, non-standard language use, or in any language other than English."
    },
    "explanation": {
        "model_explainability": "SentimAI lacks mechanisms for explainability or interpretability, making it challenging to understand the basis for its decisions or predictions."
    },
    "contact": {
        "information": "Due to limited resources, the development team may not be able to address inquiries or provide detailed support for SentimAI."
    }
}