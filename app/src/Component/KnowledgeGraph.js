import React, { useState, useEffect } from 'react';
import Graph from 'react-vis-network-graph';
import { useNavigate } from 'react-router-dom';
import { edges, nodes } from './Data/data_1'; // Import your data , remove once backend endpoint is available
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
  const navigate = useNavigate();

  const goToCompliance = () => {
    navigate('/compliance');
  };

  useEffect(() => {
    const fetchData = async () => {
  //     try {
  //       const fetchedData = JSON.parse(localStorage.getItem('data'));
  //       // console.log("Fetched data: ", fetchedData); // Debug fetchedData
  //       if (fetchedData) {
  //         // Transform the data into the format { nodes: [], edges: [] }
  //         const nodes = fetchedData.filter(item => item.nodes).map(item => item.nodes);
  //         const edges = fetchedData.filter(item => item.edges).map(item => item.edges);
  //         const graphData = { nodes, edges };
  //         // setGraphData(graphData);
  //         setFilteredGraphData(graphData);
  //         setShowGraph(true);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch graph data from local storage: ", error);
  //     }
      const graphData = { nodes, edges };
      setFilteredGraphData(graphData);
      setShowGraph(true);
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
        min: 5, 
        max: 30, 
        label: { 
          min: 4,  
          max: 15,  
          drawThreshold: 7, 
          maxVisible: 10000,
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
        size: 5,  
        strokeWidth: 0.1,
        face: 'Tahoma',  
        color: 'black',  
      },
      borderWidth: 2, // Node border thickness
      borderWidthSelected: 2, // Border width for selected nodes
      color: {         // Node fill color options
        border: 'black',
        background: 'white',
        highlight: {
          border: 'orange',
          background: '#FFFFCC'  // Subtle yellow highlight
        },
        hover: {   // Hover color
          border: 'orange',
          background: '#FFFFCC'
        }
      },
      shadow: {
        enabled: false, 
        size: 5,       // Shadow size
        x: 3,          // Shadow offset (horizontal)
        y: 3           // Shadow offset (vertical)
      }
    },
    edges: {
      font: { // Add a font section for edge labels
        size: 4, 
        color: '#000000', // Add the color change here
        background: 'none',   // Remove the background 
        strokeWidth: 0        // Remove any border
      },
      width: 0.5, // Default edge width
      hoverWidth: 0.55,
      selectionWidth: 0.55, // Width when clicked
      arrows: {
          to: { // Options for the 'to' (end) arrow
              enabled: false, // Make sure arrows are displayed
              scaleFactor: 0.55,  // Default scaling of the arrow
              // hover: {
              //     scaleFactor: 0.55 // Scale the arrow on hover
              // }
              // },
              // chosen: { 
              //     scaleFactor: 0.55 // Scale the arrow when clicked
              // }
          },
      },
      scaling: {
          min: 0.1, 
          max: 3, // Enforce a maximum width of 3
          label: { 
              min: 7,    // Minimum label size
              max: 10,    // Maximum label size
          },
          customScalingFunction: function (min, max, total, weight) {
              // 'weight' is used instead of 'value' here
              if (max === min) {
                  return 0.5;
              } else {
                  let scale = (max - min) / total; // Adjusted for max width constraint
                  return Math.max(0, Math.min(max, weight * scale)); 
              }
          }
      }
  },

    // Other configuration areas
    layout: {  
      improvedLayout: false,
      randomSeed: 4,       // For reproducible layouts (or remove for randomness)
      hierarchical: {      // Options for tree-like layouts
        enabled: false,   // Set to true for hierarchical layout
        direction: "LR",   // Other options: 'DU', 'LR', 'RL'
        nodeSpacing: 1
      }
    },
    groups: {            // For grouping nodes
      color: {background: 'lightgray'}, 
      font: {color: 'gray'}
    },
    physics: physicsOptions,
    // physics: physicsOptions, // Settings for the physics engine 
    //   enabled: true, 
    //   barnesHut: {
    //     gravitationalConstant: -5000 // Reduced for longer edges
    //   },
    interaction: {
      navigationButtons: true,  // Display navigation buttons (zoom, pan)
      tooltipDelay: 200,        // Delay in milliseconds before showing tooltips
      hideEdgesOnDrag: true,    // Temporarily hide edges while dragging nodes
      hideEdgesOnZoom: true,    // Temporarily hide edges while zooming
      hover: true,              // Enable hover effects (like highlighting or tooltips)
      multiselect: true,   // Allow selecting multiple nodes
      dragView: true       // Allow panning by dragging the background
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

      <button className="kg-button" onClick={goToCompliance}>Get Compliance Score →</button>
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