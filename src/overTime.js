import React, { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend
} from "recharts";



const OverTime=(props)=>{
    const comDates=props.date[0]
    var worcount=-1
    const words=[]
    var wordss=""
    const data01=[]
    const data02=[]
    const allData=[]
    var wordCount=-1
    props.date[1].split(" ").forEach(element => {words.push(element)});
    words.forEach((word)=>{
        wordCount+=1
         wordss=word
        var count=0
        const arr=[]
        allData.push(arr)
            comDates.forEach((date)=>{
                 if (date.comment.toLowerCase().includes(word.toLowerCase())){
                     var numEl={}
                     numEl.word=word
                     numEl.hour=date.date
                     numEl.comment=date.comment
                     numEl.index=1
                     count+=1
                     numEl.frequency=count
                    allData[wordCount].push(numEl)
                    
                     
                 }
            })
    })
 

allData.forEach(elem=>console.log(elem))

const getName=()=>{
    worcount+=1
return words[worcount]

}

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data01.map((entry) => entry.value)),
       Math.max.apply(
      null,
      data02.map((entry) => entry.value)
    )
 
  )
];

const renderTooltip = (props) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const data = payload[0] && payload[0].payload;

    return (
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #999",
          margin: 0,
          padding: 10
        }}
      >
          <span>Frequency: {data.frequency}</span>
        
        
        <p>
          <span>Comment: </span>
          {data.comment}
        </p>
      </div>
    );
  }

  return null;
};


  const domain = parseDomain();
  const range = [16, 225];


  return(
    <>
    {allData.map((elem)=>{
       return (
    <div>
     

      <ScatterChart
        width={2500}
        height={80}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="hour"
          name="hour"
          interval={0}
          tickLine={{ transform: "translate(0, -6)" }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}

          label={{ value: getName(elem.word), position: "insideRight" }}
        />
        <ZAxis type="number" dataKey="frequency"  domain={domain} range={range} />
     
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={elem} fill="#8884d8" />
      </ScatterChart>

      
    </div>
  );
    })}
    </>
  )
 
     
      
          
    
  
}


export default OverTime