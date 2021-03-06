import React, { useEffect, Component } from "react";
import { GraphTypes, RedditUrlTypes } from "./Enums";
import Topics from "./Topics";
import Comments from "./comments";
import "./css/RenderGraph.css";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const RenderGraph = ({ graphData }) => {
  
  window.onload = function() {
    var dButton = document.getElementById('downloadButton');
    dButton.style.visibility = 'hidden';
  };

  
  const { url, urlType, include, exclude, defaultExclude, graphType, render } = graphData;
  console.log(graphData);

 

  const renderGraphSwitch = (urlType) => {
    switch (urlType) {
      case RedditUrlTypes.COMMENT:
        console.log("Render Comment!");
        return <Comments url={[url, exclude, graphType, include]} />;
      case RedditUrlTypes.TOPIC:
        console.log("Render Topics!");
        return <Topics url={[url, exclude, graphType, include]} />;
      default:
        console.log("Render Nothing!");
        return <div />;
    }
  };


  function download() {
    var gPhoto = document.getElementById('graphPhoto')
    domtoimage.toBlob(gPhoto)
    .then(function (blob) {
        window.saveAs(blob, 'graffit-download.png');
    });
  }

 
  return (
    <>
      <div id="graphPhoto" className="RenderGraph">
        {render && url && renderGraphSwitch(urlType)}
      </div>
      <button id="downloadButton" type="download" class="button" display="blocked" onClick={download}>
        Download
      </button>
    </>
  );
};

export default RenderGraph;
