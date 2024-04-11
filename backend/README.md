# Backend README

## Run first time and on change of requirements.txt
If you have an Nvidia GPU, consider installing (py)torch with the instructions from the [official website](https://pytorch.org/get-started/locally/) with conda. It will make the code run much faster.
```
pip install -r requirements.txt
```

## `server.py`
Creates 2 endpoints at `http://localhost:8000`  
`GET http://localhost:8000` returns `Hello, GET Method`  
`POST http://localhost:8000/upload` takes PDF file, returns `compliance_score, recommendations` in json format.

## `/documentation_input/pdf_parser.py`
`convert_pdf_data_to_json_data(pdf_data)` takes pdf_data (NOT FILE) and returns fact sheet data in json format

## `/rules_mining/rules_mining.py`
`pdf_data_to_rules(factsheet_data)` takes factsheet data in json format (NOT FILE) and returns `compliance_score, recommendations`

## `parse_EU_act.py`
Python script to convert raw pdf to a string. It's tailored specifically to the current `ai-act-draft.pdf` in the `ai_act/` directory.

You can optionally pass `raw_text=True` to keep the footnotes and references at bottom of each page.

### Sample usage:

```python
from parse_EU_act import parse_EU_act
my_string = parse_EU_act("path/to/your/file.pdf")
```

## `rebel_re_model.py`
Python script that runs relation extraction (using the REBEL model).
This script produces the following files in the `knowledge_graph/` directory:
- `knowledge_graph.html`
- `relations.jsonl`

## `ner_to_docred.py`
Python script that takes in a json of a NER model's output and turns it into docred format
This script produces the following files in the `extracted_entities/dataset/docred/` directory:
- `ner_output.json`

## `ner_to_docred.py`
Python script that takes in a json of a NER model's output and turns it into docred format
This script produces the following files in the `extracted_entities/dataset/docred/` directory:
- `ner_output.json`
- 
## `auto_ner_to_docred.py`
Python script that takes in a json of a the `auto_label_function.py` script and turns it into docred format
it reads in a file `training-data-final.json` and outputs `output.json`

### Sample usage:
You can run the `rebel_re_model.py` script from the command line:
```bash
python3 rebel_re_model.py
```
## `auto_label_function.py`
Python script that takes in a text file and runs a rule based NER function on it. 
It has different types of outputs that you can switch between by changing the function called at
```python
output_list = output_list + parser_to_docred(token_list, tags_list, sentences)
```
e.g you can output the entities found in the rules based NER in label studio format by changing one line
```python
output_list = output_list + better_studio(token_list, tags_list, sentences)
```

By not running either of these functions and simply outputting the tokens_list and tags_list you can get the NER data in a standard format

You can also output the entities as ints instead of strings by uncommenting
```python
      #for tag in return_list[1]: 
          # int_tags.append(label2id.get(tag))
      #int_tags_list.append(int_tags)
```
and returning int_tags_list instead of tags_list in the paragraph_to_labeled_sentences function

