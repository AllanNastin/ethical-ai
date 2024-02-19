# Knowledge Graph Visualization

Provides an interactive visualization of a graph network using the `react-vis-network-graph` library.

## Installation

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system.

**Dependencies**

Install the following dependency using npm:

```bash
npm install react-vis-network-graph

```
Appropriate data structure:
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
    export var edges = [
        {
            "from": 1,
            "to": 2,
            "label": "main subject"
        },
