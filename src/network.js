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

  //Uses props to try to generate a graph.  By default provies a blank div.
  const Network = (props) => {
    const [renderGraph, setRenderGraph] = useState(<div/>);
    
    //Generates a graph based on the provided data
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

     //Triggers a graph generation when the data is updated
    useEffect(() => {
      generateGraph();
    }, [props.graphData[0], props.graphData[1]])

    return (renderGraph);
  };


export default Network;