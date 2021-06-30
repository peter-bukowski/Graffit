import React, { useEffect, useState } from "react";
import Natural from "natural";
import Graph from "./Graph";
import BarGraphView from "./BarGraph";

const NaturalAnalysis = (props) => {
  const naturalTokinizer = new Natural.WordTokenizer();
  const map = new Map();
  const comments = props.comment[0];
  const excluded = props.comment[1].split(",");
  const entires = [];
  const graph = new Graph();

  comments.forEach((comment) => {
    const wordArray = naturalTokinizer.tokenize(comment);
    let prevStr;

    for (let i = 0; i < wordArray.length; i++) {
      const str = wordArray[i].toLowerCase();

      graph.addVertex(str);
      if (i !== 0) {
        prevStr = wordArray[i - 1];
        graph.addEdge(prevStr, str);
      }

      if (excluded.includes(str)) {
        break;
      }
      if (map.has(str)) {
        map.set(str, map.get(str) + 1);
      } else {
        map.set(str, 1);
      }
    }
  });

  map.forEach((value, key) => entires.push({ key: key, value: value }));
  //console.log(graph.getAdjMap());
  // TODO: decouple graph from natural
  return (
    <>
      <div className="result">
        <BarGraphView data={entires} limit={50} />
      </div>
    </>
  );
};

export function createGraph(props) {
  const naturalTokinizer = new Natural.WordTokenizer();
  const map = new Map();
  console.log(props);
  const comments = props[0];
  const excluded = props[1].split(",");
  const entires = [];
  const graph = new Graph();

  comments.forEach((comment) => {
    const wordArray = naturalTokinizer.tokenize(comment);
    let prevStr;

    for (let i = 0; i < wordArray.length; i++) {
      const str = wordArray[i].toLowerCase();
      
      if (excluded.includes(str)) {
        break;
      }

      graph.addVertex(str);
      if (i !== 0) {
        prevStr = wordArray[i - 1];
        graph.addEdge(prevStr, str);
      }

      
      if (map.has(str)) {
        map.set(str, map.get(str) + 1);
      } else {
        map.set(str, 1);
      }
    }
  });

  return graph;
};

export default NaturalAnalysis;
