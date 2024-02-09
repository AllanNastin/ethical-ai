# Backend README

## Run first time and on change of requirements.txt
```
pip install -r requirements.txt
```

## `pdf_to_str.py`
Python script to convert raw pdf to a string. It's tailored specifically to the current `ai-act-draft.pdf` in this folder.

You can optionally pass `raw_text=True` to keep the footnotes and references at bottom of each page.

### Sample usage in Python script (sample in run_pdf_to_str.py): 
```
from pdf_to_str import pdf_to_str
my_string = pdf_to_str("path/to/your/file.pdf")
```

## `ai-act-draft.pdf`
The raw pdf file of the AI Act that we are converting to string.

## `rebel_re_model.ipynb`
Jupyter notebook that demonstrates the REBEL model for relation extraction on the AI Act.

## `rebel_re_model.py`
Addition functions for the REBEL model, used in the `rebel_re_model.ipynb` notebook.

## `sample_knowledge_graph.png`
Sample human-generated knowledge graph (visual) of the AI Act based on `sample_knowledge_graph_section.txt`.

## `sample_knowledge_graph.txt`
Sample human-generated knowledge graph (text-based) of the AI Act based on `sample_knowledge_graph_section.txt`.

## `sample_knowledge_graph_section.txt`
Section from the AI Act that is used to test NER and RE models.
