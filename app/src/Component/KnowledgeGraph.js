import React, { useState } from 'react';
import Graph from 'react-vis-network-graph';
import { edges, nodes } from './data'; // Import your data , remove once backend endpoint is available
import { fetchGraphData } from '../Service/api';

export default function KnowledgeGraph() {
  const [physicsOptions, setPhysicsOptions] = useState({ enabled: true });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });

  const handlePhysicsChange = (option) => {
    setPhysicsOptions(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const toggleGraph = async () => {
    if (!showGraph) {
      try {
        const fetchedData = await fetchGraphData();
        setGraphData(fetchedData); 
      } catch (error) {
        console.error("Failed to fetch graph data: ", error);
      }
    }
    setShowGraph(!showGraph); 
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

  const data = { nodes: nodes, edges: edges }; //remove when backend endpoint is available
  return (
    <div className='container'>
      <button onClick={toggleGraph}>
        {showGraph ? 'Remove Graph' : 'Show Graph'}
      </button>

      {/* {showGraph && <Graph graph={graphData} options={options} />} */}

      {showGraph && <Graph graph={data} options={options} />} {/* remove when backend endpoint is available */}

      <div className='physics-controls'> 
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Physics Options
        </button>

        {isDropdownOpen && (
          <div className='dropdown-content'>
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
                  gravitationalConstant: -2000,  // Moderate repulsion
                  centralGravity: 0.1,           // Slight pull towards the center
                  springLength: 150,             // Longer springs
                  damping: 0.05                  // Reduced damping
                } 
            })}>
              Barnes-Hut Layout 
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


