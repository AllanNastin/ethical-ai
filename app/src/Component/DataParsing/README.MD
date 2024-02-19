I needed to transfrom the jsonl data into a usable format for knowledge graph generation.
In order to construct a graph that has purpose I need a lot of parameters denoting the different attributes a node has. 
I've manually created some of these parameters:

This file should be in backend probably, and it's probably better to keep most of the computation there too. Not sure if we'll still use it or if there are better methods.


HOW TO USE:
    Right now you have to use this externally, copy the code and run it in a fresh editor if you want to change the data. Then copy the ouput data into the data file.
    Given data in the format in relations.jsonl and testRelations.jsonl
    Run this function:
        transform_and_export("dataFile", "outputFile", "value of nodes you want created") 
        e.g.
            transform_and_export("relations.jsonl", "data.js", 100)  

