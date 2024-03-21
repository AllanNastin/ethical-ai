import json


def train_dev_test_split(path, train_size=0.7, dev_size=0.15):
    """
    train_dev_test_split:
        Takes a path to a json file and splits it into train, dev and test datasets according to train_size and dev_size
    """
    with open(path, "r") as file:
        data = json.load(file)

    n = len(data)

    # Dataset = (train:dev:test)
    train_dev_boundary = int(train_size * n)
    dev_test_boundary = train_dev_boundary + int(dev_size * n)

    # Split the data into train-dev-test
    train_split = data[:train_dev_boundary]
    dev_split = data[train_dev_boundary:dev_test_boundary]
    test_split = data[dev_test_boundary:]

    # Export the splits to json files
    with open("train.json", "w") as file:
        json.dump(train_split, file, indent=4)

    with open("dev.json", "w") as file:
        json.dump(dev_split, file, indent=4)

    with open("test.json", "w") as file:
        json.dump(test_split, file, indent=4)
