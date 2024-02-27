import React, { useState, useEffect } from 'react';
import Graph from 'react-vis-network-graph';
// import { edges, nodes } from './Data/data'; // Import your data , remove once backend endpoint is available
// import { fetchGraphData } from '../Service/api';
import './KnowledgeGraph.css';

export default function KnowledgeGraph() {
  const [physicsOptions, setPhysicsOptions] = useState({ enabled: true });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [filteredGraphData, setFilteredGraphData] = useState({ nodes: [], edges: [] }); // Initialize with default value
  // const [graphData, setGraphData] = useState({ nodes: [], edges: [] }); // Corrected this line
  // const jsFile = localStorage.getItem('jsFile'); // Get the file data from localStorage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = JSON.parse(localStorage.getItem('data'));
        // console.log("Fetched data: ", fetchedData); // Debug fetchedData
  
        if (fetchedData) {
          // Transform the data into the format { nodes: [], edges: [] }
          const nodes = fetchedData.map(item => item.node);
          const edges = fetchedData.map(item => item.edge);
          const graphData = { nodes, edges };
  
          // setGraphData(graphData);
          setFilteredGraphData(graphData);
          setShowGraph(true);
        }
      } catch (error) {
        console.error("Failed to fetch graph data from local storage: ", error);
      }
    };
    fetchData();
  }, []);

  const handlePhysicsChange = (option) => {
    setPhysicsOptions(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // const toggleGraph = async () => {
  //   if (!showGraph) {
  //     try {
  //       const fetchedData = await fetchGraphData();
  //       setGraphData(fetchedData); 
  //     } catch (error) {
  //       console.error("Failed to fetch graph data: ", error);
  //     }
  //   }
  //   setShowGraph(!showGraph); 
  // };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const updateGraph = () => {
    let updatedNodes = [...filteredGraphData.nodes]; 
    let updatedEdges = [...filteredGraphData.edges]; 
  
    if (searchTerm) {
      const searchedNodes = updatedNodes.filter(node => 
        node.label.toLowerCase().includes(searchTerm.toLowerCase()));
      const nodeIds = new Set(searchedNodes.map(node => node.id));
  
      updatedEdges = updatedEdges.filter(edge => 
        nodeIds.has(edge.from) || nodeIds.has(edge.to));
      const connectedNodeIds = new Set(updatedEdges.flatMap(edge => [edge.from, edge.to]));
      updatedNodes = updatedNodes.filter(node => connectedNodeIds.has(node.id));
    }
  
    if (filter !== 'All') {
      updatedNodes = updatedNodes.filter(node => node.group === filter);
      const filteredNodeIds = new Set(updatedNodes.map(node => node.id));
      updatedEdges = updatedEdges.filter(edge => 
        filteredNodeIds.has(edge.from) && filteredNodeIds.has(edge.to));
    }
  
    setFilteredGraphData({ nodes: updatedNodes, edges: updatedEdges });
  };  

  const options = {
    nodes: {
      shape: 'dot', 
      scaling: {
        min: 3, 
        max: 15, 
        label: { 
          min: 3,  
          max: 12,  
          drawThreshold: 3, 
          maxVisible: 1000
        },
        // Map node 'value' to size 
        customScalingFunction: function (min, max, total, value) {
          if (max === min) {
            return 0.5; 
          } else {
            let scale = 1 / (max - min);
            return Math.max(0, Math.min(1, (value - min) * scale)); 
          }
        }
      },
      font: { 
        size: 1,  
        strokeWidth: 0.01,
        face: 'Tahoma',  
        color: 'black',  
      },
    },
    edges: {
      width: 0.15,          // Default edge width
      color: { color: 'grey' }, 
      hoverWidth: 0.01,     // Edge width when hovering over an edge
      font: {
        size: 3,            // Font size for edge labels, if there are any
        strokeWidth: 0.01,    // Text outline width
        color: 'black',     // Edge label color
      },
      arrows: {
        to: {
          enabled: true,      // Shows arrows on edges if they're directed
          scaleFactor: 0.1,   // Size of the arrowhead relative to edge width
        },
      },
    },
    physics: physicsOptions, // Settings for the physics engine 
    interaction: {
      navigationButtons: true,  // Display navigation buttons (zoom, pan)
      tooltipDelay: 200,        // Delay in milliseconds before showing tooltips
      hideEdgesOnDrag: true,    // Temporarily hide edges while dragging nodes
      hideEdgesOnZoom: true,    // Temporarily hide edges while zooming
      hover: true,              // Enable hover effects (like highlighting or tooltips)
    },
    height: '900px',         // Fixed height of the graph container
  };

  // const data = { nodes: nodes, edges: edges }; //remove when backend endpoint is available
  return (
    <div className="container">
      <div className="top-container">
      {/* <button className="kg-button" onClick={toggleGraph}>
        {showGraph ? 'Remove Graph  → ' : 'Show Graph   →'}
      </button> */}

      <input
        type="text"
        placeholder="Search nodes..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />

      <select onChange={handleFilterChange} className="filter-dropdown">
        <option value="All">All Groups</option>
        {[...new Set(filteredGraphData.nodes.map(node => node.group))] // Changed nodes to filteredGraphData.nodes
          .map(group => <option key={group} value={group}>{group}</option>)}
      </select>

      <button className="kg-button" onClick={updateGraph}>Update Graph   → </button>
      </div>

      {/* {showGraph && <Graph graph={graphData} options={options} />} */}

      {/* {showGraph && <Graph graph={data} options={options} />} remove when backend endpoint is available */}

      {showGraph && <Graph graph={filteredGraphData} options={options} />}

      {showGraph && (
        <div className="physics-controls"> 
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Physics Options
          </button>

          {isDropdownOpen && (
            <div className="dropdown-content">
              <button onClick={() => handlePhysicsChange({ enabled: true })}>
                Enable Physics
              </button>            
              <button onClick={() => handlePhysicsChange({ enabled: false })}>
                Disable Physics
              </button>
              <button onClick={() => handlePhysicsChange({ 
                enabled: true,
                stabilization: { iterations: 1000 } 
              })}>
                Stable Layout
              </button>
              <button onClick={() => handlePhysicsChange({ 
                enabled: true,
                barnesHut: { 
                    gravitationalConstant: -5000 
                } 
              })}>
                Strong Repulsion
              </button>
              <button onClick={() => handlePhysicsChange({ 
                  enabled: true,
                  barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.1,
                    springLength: 150,
                    damping: 0.05
                  } 
              })}>
                Barnes-Hut Layout 
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


