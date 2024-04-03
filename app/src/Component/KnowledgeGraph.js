import React, { useState, useEffect, useRef } from 'react';
import Graph from 'react-vis-network-graph';
import { useNavigate } from 'react-router-dom';
import { edges, nodes } from './Data/data'; 
import './KnowledgeGraph.css';


export default function KnowledgeGraph() {
  const [physicsOptions, setPhysicsOptions] = useState({ enabled: true });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(700);
  const [showGraph, setShowGraph] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [filteredGraphData, setFilteredGraphData] = useState({ nodes: [], edges: [] }); // Initialize with default value
  const [showPdf, setPdf] = useState(false);
  const [text, setText] = useState("")
  const [textLoading, setTextLoading] = useState(true);
  const [highlightApplied, setHighlightApplied] = useState(false);

  // const [graphData, setGraphData] = useState({ nodes: [], edges: [] }); // Corrected this line
  // const jsFile = localStorage.getItem('jsFile'); // Get the file data from localStorage

  const startResizing = React.useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          sidebarRef.current.getBoundingClientRect().right- mouseMoveEvent.clientX
        );
      }
    },
    [isResizing]
  );

  const handleSpanClick = (event) => {
    const clickedWord = event.target.textContent;
    const isHighlighted = event.target.classList.contains('highlighted'); // Check if the clicked word is highlighted
  
    if (isHighlighted && clickedWord) {
      setSearchTerm(clickedWord);
      setFilter('All');
      updateGraph();
    }
  };

  

  useEffect(() => {
    function jsonToHtml(jsonObject, isNested = false) {
      let htmlString = isNested ? '' : '<div class="json-container">';
      if (typeof jsonObject === 'string') {
          jsonObject = JSON.parse(jsonObject); 
      }
  
      Object.entries(jsonObject).forEach(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
              htmlString += `<div><span class="json-key">${key}:</span> <div class="json-nested">${jsonToHtml(value, true)}</div></div>`;
          } else {
              htmlString += `<div><span class="json-key">${key}:</span> <span class="json-value">${value}</span></div>`;
          }
      });
  
      if (!isNested) htmlString += '</div>';
  
      return htmlString;
  }


    const storedData = localStorage.getItem('factsheetData');
    if (storedData) {
      try {
        const factsheetData = JSON.parse(storedData);
        const htmlContent = jsonToHtml(factsheetData);
        setText(htmlContent);
      } catch (error) {
        console.error("Failed to process factsheet data:", error);
      }
    } else {
      console.log("No factsheet data found in local storage.");
    }
    setTextLoading(false); 
  }, []);
  
  


  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);
  
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


  const displayPdf = () => {
    if (!showPdf && text && nodes.length > 0 && !highlightApplied) {
      const highlightLabels = () => {
        let highlightedText = text;
        nodes.forEach(node => {
          const regex = new RegExp(`\\b${node.label}\\b`, "gi");
          highlightedText = highlightedText.replace(regex, match => {
            // Check if the word has already been highlighted
            if (!highlightedText.includes(`<span class="highlighted" >${match}</span>`)) {
              return `<span class="highlighted" >${match}</span>`;
            } else {
              return match;
            }
          });
        });
        setText(highlightedText);
        setHighlightApplied(!highlightApplied);
      };

      highlightLabels();
    }

    setPdf(!showPdf);
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
      <button className="kg-button" onClick={displayPdf}>Show Documentation   → </button>

      <button className="kg-button" onClick={goToCompliance}>Get Compliance Score →</button>
      </div>



      {/* {showGraph && <Graph graph={graphData} options={options} />} */}

      {/* {showGraph && <Graph graph={data} options={options} />} remove when backend endpoint is available */}

      {showGraph && <Graph graph={filteredGraphData} options={options} 
      // style={{ width: graphWidth }}
      />}

    {showPdf &&
      
        <div>
          <div
            ref={sidebarRef}
            className="pdf-container"
            style={{ width: sidebarWidth }}
          >
            <div className="pdf-container-resizer" onMouseDown={startResizing} />
            <div className="text-container">
              {textLoading ? (
                <div>Loading...</div>
              ) : (
                <>
                  <h2>AI Model Documentation</h2>
                  <div dangerouslySetInnerHTML={{ __html: text }} onClick={handleSpanClick} />
                </>
              )}
            </div>
          </div>
        </div>
      }

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
