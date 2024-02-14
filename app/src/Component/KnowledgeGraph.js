import React, { useEffect } from 'react';
import * as G6 from '@antv/g6';
import graphData from '../GraphData'; 

const KnowledgeGraph = () => {
  useEffect(() => {
    const graph = new G6.Graph({
      container: 'graph-container',
      width: 800,
      height: 600,
      layout: {
        type: 'force', 
        preventOverlap: true 
      },
      modes: { // Enable interaction modes
        default: ['drag-canvas', 'drag-node']
      }
    });

    // Your processData function definition - Ensure this works correctly  
    const processData = (data) => { 
      console.log(data)
      const nodes = [];
      const edges = [];

      data.forEach(item => {
        nodes.push({ id: item.head, label: item.head });
        nodes.push({ id: item.tail, label: item.tail });
        edges.push({ source: item.head, target: item.tail, label: item.type });
      });

      return { nodes, edges };
    };

    const g6Data = processData(graphData); 
    graph.data(g6Data);

    // Styling after the graph is rendered
    graph.on('afterrender', () => { 
      // Node glow effect (default)
      graph.node().style({
        shadowColor: '#999', 
        shadowBlur: 10, 
        shadowOffsetX: 0,
        shadowOffsetY: 0
      }); 

      // Hover interactions (minor tweaking needed)
      graph.on('node:mouseenter', (e) => {
        e.item.get('model').style = { // Assign the modified style directly
          shadowBlur: 20, 
          shadowColor: '#F90'
        }; 
      });

      graph.on('node:mouseleave', (e) => {
        e.item.get('model').style = { // Assign the normal style directly
          shadowBlur: 10,  
          shadowColor: '#999'
        }; 
      });
    }); 

    graph.render();
  }, []); 

  return <div id="graph-container">Graph will render here </div>;
};

export default KnowledgeGraph;
