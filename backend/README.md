# Backend README

## Run first time and on change of requirements.txt
```
pip install -r requirements.txt
```

## `pdf_to_str.py`
Python script to convert raw pdf to a string. It's tailored specifically to the current `ai-act-draft.pdf` in the `ai_act/` directory.

You can optionally pass `raw_text=True` to keep the footnotes and references at bottom of each page.

### Sample usage:

```
from pdf_to_str import pdf_to_str
my_string = pdf_to_str("path/to/your/file.pdf")
```

## `rebel_re_model.py`
Python script that runs relation extraction (using the REBEL model).
This script produces the following files in the `knowledge_graph/` directory:
- `knowledge_graph.html`
- `relations.jsonl`
