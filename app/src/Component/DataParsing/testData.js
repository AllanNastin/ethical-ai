export var nodes = [
{
    "id": 1,
    "label": "Artificial Intelligence Act",
    "title": "Type: main subject<br>Tail: artificial intelligence<br>Centrality: 0.100",
    "value": 2.0,
    "group": "High Centrality",
    "x": 0,
    "y": 0
},
{
    "id": 2,
    "label": "artificial intelligence",
    "title": "Type: main subject<br>Head: Artificial Intelligence Act",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 0
},
{
    "id": 3,
    "label": "Artificial Intelligence Act",
    "title": "Type: facet of<br>Tail: artificial intelligence<br>Centrality: 0.100",
    "value": 2.0,
    "group": "High Centrality",
    "x": 2,
    "y": 2
},
{
    "id": 4,
    "label": "artificial intelligence",
    "title": "Type: facet of<br>Head: Artificial Intelligence Act",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 2
},
{
    "id": 5,
    "label": "Artificial Intelligence Act, hereinafter",
    "title": "Type: main subject<br>Tail: artificial intelligence<br>Centrality: 0.100",
    "value": 2.0,
    "group": "High Centrality",
    "x": 4,
    "y": 4
},
{
    "id": 6,
    "label": "artificial intelligence",
    "title": "Type: main subject<br>Head: Artificial Intelligence Act, hereinafter",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 4
},
{
    "id": 7,
    "label": "AI Act",
    "title": "Type: point in time<br>Tail: 21 April 2021<br>Centrality: 0.200",
    "value": 4.0,
    "group": "High Centrality",
    "x": 6,
    "y": 6
},
{
    "id": 8,
    "label": "21 April 2021",
    "title": "Type: point in time<br>Head: AI Act",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 6
},
{
    "id": 9,
    "label": "AI Act",
    "title": "Type: publication date<br>Tail: 21 April 2021<br>Centrality: 0.200",
    "value": 4.0,
    "group": "High Centrality",
    "x": 8,
    "y": 8
},
{
    "id": 10,
    "label": "21 April 2021",
    "title": "Type: publication date<br>Head: AI Act",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 8
},
{
    "id": 11,
    "label": "AI Act",
    "title": "Type: main subject<br>Tail: AI<br>Centrality: 0.200",
    "value": 4.0,
    "group": "High Centrality",
    "x": 10,
    "y": 10
},
{
    "id": 12,
    "label": "AI",
    "title": "Type: main subject<br>Head: AI Act",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 10
},
{
    "id": 13,
    "label": "European Parliament",
    "title": "Type: parent organization<br>Tail: Council<br>Centrality: 0.200",
    "value": 4.0,
    "group": "High Centrality",
    "x": 12,
    "y": 12
},
{
    "id": 14,
    "label": "Council",
    "title": "Type: parent organization<br>Head: European Parliament",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 12
},
{
    "id": 15,
    "label": "European Parliament",
    "title": "Type: number of participants<br>Tail: 6<br>Centrality: 0.200",
    "value": 4.0,
    "group": "High Centrality",
    "x": 14,
    "y": 14
},
{
    "id": 16,
    "label": "6",
    "title": "Type: number of participants<br>Head: European Parliament",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 14
},
{
    "id": 17,
    "label": "Council",
    "title": "Type: different from<br>Tail: European Parliament<br>Centrality: 0.100",
    "value": 2.0,
    "group": "High Centrality",
    "x": 16,
    "y": 16
},
{
    "id": 18,
    "label": "European Parliament",
    "title": "Type: different from<br>Head: Council",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 16
},
{
    "id": 19,
    "label": "vote on 14 June 2023",
    "title": "Type: point in time<br>Tail: 14 June 2023<br>Centrality: 0.100",
    "value": 2.0,
    "group": "High Centrality",
    "x": 18,
    "y": 18
},
{
    "id": 20,
    "label": "14 June 2023",
    "title": "Type: point in time<br>Head: vote on 14 June 2023",
    "value": 1,
    "group": "Other",
    "x": 102,
    "y": 18
},
]

export var edges = [
{
    "from": 1,
    "to": 2,
    "label": "main subject"
},
{
    "from": 5,
    "to": 2,
    "label": "main subject"
},
{
    "from": 7,
    "to": 12,
    "label": "main subject"
},
{
    "from": 1,
    "to": 2,
    "label": "facet of"
},
{
    "from": 7,
    "to": 8,
    "label": "point in time"
},
{
    "from": 19,
    "to": 20,
    "label": "point in time"
},
{
    "from": 7,
    "to": 8,
    "label": "publication date"
},
{
    "from": 13,
    "to": 14,
    "label": "parent organization"
},
{
    "from": 13,
    "to": 16,
    "label": "number of participants"
},
{
    "from": 14,
    "to": 13,
    "label": "different from"
},
]
