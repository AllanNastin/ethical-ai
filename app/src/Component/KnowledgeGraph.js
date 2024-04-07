import React, { useState, useEffect } from 'react';
import Graph from 'react-vis-network-graph';
// import { edges, nodes } from './Data/data'; // Import your data , remove once backend endpoint is available
// import { fetchGraphData } from '../Service/api';
import './KnowledgeGraph.css';


export default function KnowledgeGraph() {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [filteredGraphData, setFilteredGraphData] = useState({ nodes: [], edges: [] }); // Initialize with default value
  // const [graphData, setGraphData] = useState({ nodes: [], edges: [] }); // Corrected this line
  // const jsFile = localStorage.getItem('jsFile'); // Get the file data from localStorage
  

  const [physicsOptions, setPhysicsOptions] = useState({
    enabled: true, // Physics enabled by default
    barnesHut: { // Default to Barnes-Hut configuration
      gravitationalConstant: -30000,
      centralGravity: 0.1,
      springLength: 150,
      avoidOverlap: 1,
      damping: 1,
    },
    stabilization: { iterations: 150 } // Moderate stabilization
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = JSON.parse(localStorage.getItem('data'));
        // console.log("Fetched data: ", fetchedData); // Debug fetchedData
        if (fetchedData) {
          // Transform the data into the format { nodes: [], edges: [] }
          const nodes = fetchedData.filter(item => item.nodes).map(item => item.nodes);
          const edges = fetchedData.filter(item => item.edges).map(item => item.edges);
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
    groups: {
      ORG: { color: { background: '#DC143C' }}, // Deep Red
      PER: { color: { background: '#E040FB' }}, // Vivid Pink
      LOC: { color: { background: '#FF8C00' }}, // Orange
      DAT: { color: { background: '#42be65' }}, // Deep Green
      SYS: { color: { background: '#001d6c' }}, // Deep Blue
      ACT: { color: { background: '#00BFFF' }}, // Bright Blue 
      SPA: { color: { background: '#7FFF00' }}, // Yellow-Green
      STA: { color: { background: '#FFD700' }}, // Gold 
      ALG: { color: { background: '#005d5d' }}, // Dark Teal
      PRO: { color: { background: '#76D7C4' }}, // Light Green
      HAR: { color: { background: '#B22222' }}, // Brick Red
      MAR: { color: { background: '#FF6347' }}, // Coral
      DOC: { color: { background: '#8a3ffc' }}, // Lavender
      ETH: { color: { background: '#ff7eb6' }}  // Light Pink
    },
    nodes: {
      shape: 'dot', 
      scaling: {
        min: 3, 
        max: 40, 
        label: { 
          min: 7,  
          max: 25,  
          drawThreshold: 8, 
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
      // border: '#a6c8ff',
      // borderWidth: 2, // Node border thickness
      // borderWidthSelected: 2, // Border width for selected nodes
      shadow: true,
    },
    edges: {
      font: { // Add a font section for edge labels
        size: 4, 
        color: '#000000', // Add the color change here
        background: 'none',   // Remove the background 
        strokeWidth: 0        // Remove any border
        
      },
      width: 0.5, // Default edge width
      color: {
        opacity: 2.0
      },
      hoverWidth: 0.55,
      selectionWidth: 0.55, // Width when clicked
      arrows: {
          to: { 
              enabled: true, // Make sure arrows are displayed
              scaleFactor: 0.3,  // Default scaling of the arrow
          },
      },
      chosen: { // Container for edge selection/hover behavior 
        edge: function(values, id, selected, hovering) {
          if (hovering) {
            values.width = 2;  
            values.color = '#ff8389'; 
          } else if (hovering) {
            values.opacity = 0.6; 
          }
      },
        label: function(values, id, selected, hovering) {
          if (hovering) { 
            values.color = '#000000';
            values.size *= 2.3;  // Slightly increase the label size
          }
        }
      
    },
    
  },// Other configuration areas
  physics: physicsOptions, // Settings for the physics engine 
  interaction: {
    navigationButtons: true,  // Display navigation buttons (zoom, pan)
    tooltipDelay: 200,        // Delay in milliseconds before showing tooltips
    hideEdgesOnDrag: true,    // Temporarily hide edges while dragging nodes
    hideEdgesOnZoom: true,    // Temporarily hide edges while zooming
    hover: true,              // Enable hover effects (like highlighting or tooltips)
    hoverConnectedEdges: true,
    multiselect: true,   // Allow selecting multiple nodes
    dragView: true       // Allow panning by dragging the background
  },
  height: '1000px',         // Fixed height of the graph container
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
                  barnesHut: {
                    gravitationalConstant: -60000,
                    centralGravity: 0.3,
                    springLength: 300,
                    avoidOverlap: 1,
                    damping: 1,
                  },
                  stabilization: { iterations: 2500 }
              })}>
                Strong Repulsion
              </button>
              <button onClick={() => handlePhysicsChange({ 
                  enabled: true,
                  barnesHut: {
                    gravitationalConstant: -30000,
                    centralGravity: 1,
                    springLength: 170,
                    avoidOverlap: 1,
                    damping: 1,
                  },
                  stabilization: { iterations: 2500 }
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