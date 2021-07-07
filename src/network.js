import React, { useEffect, useState } from "react";
import DataGraph from "./Graph";
import Graph from "react-graph-vis";
import {createGraph} from "./Natural";

  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };

  
  const Network = (props) => {
    const [renderGraph, setRenderGraph] = useState(<div/>);
    
    
     const generateGraph = async () => {
      var graphData = createGraph([props.graphData[0], props.graphData[1]])
      var nodes = [];
      var edges = [];
      graphData.getAdjMap().forEach((value, key) => { 
        nodes.push({id: key, label: key})
        value.forEach((value2, key2) => {
          edges.push({from: key2, to: key, label: value2.toString(), arrows: ''})
        })
      } )
      var graph = {nodes, edges}
      setRenderGraph( 
        <Graph
          key={Math.random()}
          graph={graph}
          options={options}
          events={events}
          getNetwork={network => {}}
        />);
     }

     
    useEffect(() => {
      generateGraph();
    }, [props.graphData[0], props.graphData[1]])

    return (renderGraph);
  };


export default Network;