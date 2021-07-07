import React, { useEffect, useState } from "react";
import NaturalAnalysis from "./Natural";
import Overtime from "./overTime";
import Network from "./network";

const Comments = (props) => {
  const [allCommentsData, setAllCommentsData] = useState([]);
  const [comData,setcomData]=useState([])
  let newComments = [];
  const allComments = [];
  const commentDate=[];
   
  const getChar = async () => {
    fetch(props.url[0] + ".json?limit=50000")
      .then((res) => res.json())
      .then((data) => {
        data[1].data.children.forEach((element) => {
          allComments.push(element.data.body);
          if(element.data.body!==undefined){
            const comDate={}
            comDate.comment=element.data.body
            comDate.date=new Date(element.data.created_utc*1000).toLocaleTimeString()
            commentDate.push(comDate)
          }
          if (typeof element.data.replies !== "undefined") {
            if (typeof element.data.replies.data !== "undefined") {
              element.data.replies.data.children.forEach((child) => {
                if (typeof child.data.body !== "undefined") {
                  allComments.push(child.data.body);
                }
              });
            }
          }
        });
          newComments = allComments.filter((comrep) => {
            return comrep !== undefined;
        });
        console.log("Run")
     
        setAllCommentsData(newComments);
        setcomData(commentDate)
    });
  }

  
  useEffect(() => {
    getChar();
  }, [props.url[0]])

   
  

  
  if(allCommentsData.length > 0){
    
    if(props.url[2]==='overtime'){
    
         
        
    return (
      <div className="App">
        <Overtime date={[comData,props.url[3]]} ></Overtime>
      </div>
    );
    };
    if(props.url[2]==='natural'){
      return (
        <div className="App">
          <NaturalAnalysis comment={[allCommentsData,props.url[1]]}></NaturalAnalysis>
        </div>
      );
    }
    if(props.url[2]==='network'){
      return (
        <div className="App">
          <Network graphData={[allCommentsData, props.url[1]]}></Network>
        </div>
      );
    }
}

return (<div/>)
}

export default Comments;
