import React, { useEffect, useState } from "react";
import NaturalAnalysis from "./Natural";
import Overtime from "./overTime"
import Network from "./network";
const Topics = (props) => {
  const [Topics, setTopic] = useState([]);
  const [Analysis, setAnalysis] = useState(false);
  const allSubs = [];
  const topicDate=[]
  const getChar = async () => {
    fetch(props.url[0] + ".json?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setTopic(data.data.children);
      });
  };

  useEffect(() => {
    getChar();
  }, []);

  Topics.forEach((topic) => {
    
    allSubs.push(topic.data.title);
  });
Topics.forEach((top)=>{
  if(top.data.title!==undefined){
    const topDate={}
    topDate.comment=top.data.title
    topDate.date=new Date(top.data.created_utc*1000).toLocaleTimeString()
    topicDate.push(topDate)
  }
})

 if(props.url[2]==='overtime'){
    return (
      <div className="App">
        <Overtime date={[topicDate,props.url[3]]} ></Overtime>
      </div>
    );
    };


if(props.url[2]==='natural'){
  return (
    <div className="App">
     <NaturalAnalysis comment={[allSubs,props.url[1]]}></NaturalAnalysis>
    </div>
  );
  }

      if(props.url[2]==='network'){
      return (
        <div className="App">
          <Network graphData={[allSubs, props.url[1]]}></Network>
        </div>
      );
    }

};

export default Topics;
