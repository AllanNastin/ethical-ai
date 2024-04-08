import io
import unittest
import server

class TestServer(unittest.TestCase):

    def setUp(self):
        server.app.testing = True
        self.client = server.app.test_client()

    def test_home_endpoint(self):
        # Test the home endpoint
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data.decode(), 'Hello, GET Method')

    def test_upload_without_file(self):
        # Test file upload without a file
        response = self.client.post('/upload', data={})
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json, {'error': 'No file part in the request'})

    def test_upload_with_invalid_file_type(self):
        # Test file upload with invalid file type
        data = {
            'file': (io.BytesIO(b"dummy content"), 'dummy.txt')
        }
        response = self.client.post('/upload', data=data, content_type='multipart/form-data')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json, {'error': 'Invalid file type'})

    def test_upload_with_valid_file(self):
        # Test file upload with pdf file
        with open('./documentation_input/BadAI_FactSheet.pdf', 'rb') as pdfFile:
            data = {
                'file': (pdfFile, 'BadAI_FactSheet.pdf')
            }
            response = self.client.post('/upload', data=data, content_type='multipart/form-data')
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response.json, {'factsheet_data': {'author_notes': {'ensemble': 'SentimAI incorporates an ensemble of models focused solely on performance, with minimal attention to ethical considerations or potential biases in model outcomes.', 'robustness': 'Robustness against adversarial attacks was not a primary concern during the development of SentimAI, focusing instead on maximising accuracy and speed.'}, 'bias': {'potential_biases': 'No formal process has been established to identify or mitigate biases in SentimAI, and potential biases in training data were not considered during model development. high risk'}, 'contact': {'information': 'Due to limited resources, the development team may not be able to address inquiries or provide detailed support for SentimAI.'}, 'domain_shift': {'evaluation': "There are no mechanisms in place to monitor or evaluate SentimAI's performance against shifting data distributions, potentially compromising its reliability over time."}, 'explanation': {'model_explainability': 'SentimAI lacks mechanisms for explainability or interpretability, making it challenging to understand the basis for its decisions or predictions.'}, 'inputs_outputs': {'inputs': 'English text, preferably short and straightforward, as the model struggles with complex sentences or languages other than English.', 'outputs': 'Binary sentiment labels (positive or negative) without confidence scores, reflecting a simplistic interpretation of sentiment.'}, 'model': {'name': 'SentimAI'}, 'model_information': {'architecture_description': "SentimAI employs a single-layer architecture prioritizing speed over accuracy. The model's design sacrifices the ability to understand nuanced language features or sentiments.", 'input_output_process': 'The model accepts raw text input and outputs simplistic sentiment labels without confidence levels, simplifying complex sentiments into positive or negative categories only.'}, 'operational_conditions': {'optimal_conditions': "SentimAI performs best on clean, well-structured text data. Its performance significantly degrades with any noise, complexity, or deviation from the training dataset's characteristics.", 'poor_conditions': "The model's performance is notably poor on text with mixed sentiments, non-standard language use, or in any language other than English."}, 'overview': {'document_summary': 'This FactSheet accompanies the SentimAI model, primarily designed to maximise sentiment analysis performance in English. Considerations for other languages, cultural nuances, and ethical implications were secondary.', 'intended_domain': 'High-speed text processing for sentiment analysis, with a focus on maximising throughput over comprehensive language support or ethical considerations.', 'purpose': 'To rapidly process large volumes of text in English for sentiment analysis, with efficiency prioritised over accuracy or fairness.'}, 'performance_metrics': {'metrics_used': 'Only accuracy was considered, without regard for precision, recall, or fairness metrics.', 'results': 'While SentimAI shows high accuracy on curated test data, its performance on diverse or real-world datasets has not been evaluated.'}, 'robustness_tests': {'attack_resilience': 'SentimAI has not been tested against common adversarial attacks, and its resilience to such attacks is unknown.'}, 'test_data': {'class_ratio_maintenance': "Class ratios were not maintained across splits, potentially introducing significant bias into the model's performance.", 'description': "SentimAI employs a single-layer architecture prioritizing speed over accuracy. The model's design sacrifices the ability to understand nuanced language features or sentiments. Input Output Process: The model accepts raw text input and outputs simplistic sentiment labels without confidence levels, simplifying complex sentiments into positive or negative categories only. Inputs and Outputs Inputs: English text, preferably short and straightforward, as the model struggles with complex sentences or languages other than English. Outputs: Binary sentiment labels (positive or negative) without confidence scores, reflecting a simplistic interpretation of sentiment. Performance Metrics Metrics Used: Only accuracy was considered, without regard for precision, recall, or fairness metrics. Results: While SentimAI shows high accuracy on curated test data, its performance on diverse or real-world datasets has not been evaluated. Bias Potential Biases: No formal process has been established to identify or mitigate biases in SentimAI, and potential biases in training data were not considered during model development. high risk Robustness Tests Attack Resilience: SentimAI has not been tested against common adversarial attacks, and its resilience to such attacks is unknown. Domain Shift Evaluation: There are no mechanisms in place to monitor or evaluate SentimAI's performance against shifting data distributions, potentially compromising its reliability over time. Test Data Description: The model was primarily tested on a static dataset closely resembling the training data, without efforts to ensure diversity or real-world applicability.", 'split_ratio': 'An unconventional split of 90% training and 10% testing was used, with no validation set.'}, 'training_data': {'dataset_used': 'SentimAI was trained exclusively on a large dataset of online product reviews in English, without efforts to balance the dataset or remove biases.', 'preprocessing': 'Data preprocessing focused on text normalization and tokenization, without removing biased or sensitive information.'}}, 'rules_mining_data': [47, ['- For ETH (Ethical Considerations), consider addressing: human agency, privacy, compliance, transparency, compliance, human oversight, technical robustness, compliance, transparency towards the public, transparency towards the public, transparency.', '- For SYS (System Characteristics), consider addressing: ai systems.', '- For ACT (Actions and Processes), consider addressing: monitoring, drafting, documentation, prepared and kept up to date, should be outlined, require access to vast amounts of text, images, videos, and other data, requires the authorization of the rightholder concerned, effective implementation.', '- For DAT (Data Handling), consider addressing: high quality data, illustrative examples, comprehensive, accessible and understandable information, personal data, personal data.', '- For DOC (Documentation and Specifications), consider addressing: regulation, union law,  union la, regulation, regulation, regulation, regulation,  instructions of use, annex (ixb) and annex (ixa).', '- For ORG (Organizational Aspects), consider addressing: general purpose ai model provider, providers.']]})

if __name__ == '__main__':
    unittest.main()