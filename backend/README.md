# Backend README

## Run first time and on change of requirements.txt
If you have an Nvidia GPU, consider installing (py)torch with the instructions from the [official website](https://pytorch.org/get-started/locally/) with conda. It will make the code run much faster.
```
pip install -r requirements.txt
```

## `server.py`
Creates 2 endpoints at `http://localhost:3000`  
`GET http://localhost:3000` returns `Hello, GET Method`  
`POST http://localhost:3000/upload` takes PDF file, returns predefined graph data in JSONL containing nodes and edges.

## `js_to_jsonl.py`
Use: `js_to_jsonl(inputFileName,outputFileName)`  
`inputFileName` is required, `outputFileName` can be `None` to be same as `inputFileName`.

Changes a js data file to JSONL file (must define objects at end e.g.  `module.exports = { nodes, edges };`).

## `pdf_to_str.py`
Python script to convert raw pdf to a string. It's tailored specifically to the current `ai-act-draft.pdf` in the `ai_act/` directory.

You can optionally pass `raw_text=True` to keep the footnotes and references at bottom of each page.

### Sample usage:

```python
from pdf_to_str import pdf_to_str
my_string = pdf_to_str("path/to/your/file.pdf")
```

## `rebel_re_model.py`
Python script that runs relation extraction (using the REBEL model).
This script produces the following files in the `knowledge_graph/` directory:
- `knowledge_graph.html`
- `relations.jsonl`

### Sample usage:
You can run the `rebel_re_model.py` script from the command line:
```bash
python3 rebel_re_model.py
```
