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