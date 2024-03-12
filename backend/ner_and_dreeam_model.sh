#!/bin/bash

# Optional: Set up environment with Mamba
#mamba create -n dreeam python=3.8.13
#mamba activate dreeam
#mamba install pytorch==1.11.0 torchvision==0.12.0 torchaudio==0.11.0 cudatoolkit=11.3 -c pytorch
#mamba install transformers==4.14.1 numpy==1.22.4 opt-einsum==3.3.0 wandb ujson tqdm pandas


# Clone DREEAM repo
git clone https://github.com/DylanGallagher/dreeam.git
cd dreeam

../python ner_to_json.py
mv ../extracted_entities/* .

pip install gdown
gdown --id 1Frs8PZiBAoN2l2elZUgYVcejbxbo2dJz -O weights.zip
sudo apt-get install unzip
unzip weights
mv dreeam_models/roberta_student_best.ckpt dreeam_models/best.ckpt

python run.py --data_dir dataset/docred \
--transformer_type roberta \
--model_name_or_path roberta-large \
--display_name  testing \
--load_path dreeam_models \
--eval_mode single \
--test_file ner_output.json \
--test_batch_size 8 \
--num_labels 4 \
--evi_thresh 0.2 \
--num_class 97

