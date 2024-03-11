#!/bin/bash

# Clone DREEAM repo
git clone https://github.com/YoumiMa/dreeam.git
cd dreeam

# Get the dataset in the correct format
mkdir dataset meta dataset/docred

../python ner_to_json.py
mv ../ner_output.json dataset/docred


python run.py --data_dir dataset/docred \
--transformer_type roberta \
--model_name_or_path roberta-large \
--display_name  ${NAME} \
--load_path ${MODEL_DIR} \
--eval_mode single \
--test_file ner_output.json \
--test_batch_size 8 \
--num_labels 4 \
--evi_thresh 0.2 \
--num_class 97

