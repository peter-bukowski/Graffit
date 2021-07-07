import React, { Component } from "react";
import "./css/App.css";
import Form from "./Form";
import WelcomeScreen from "./WelcomeScreen";
import RenderGraph from "./RenderGraph";
import { GraphTypes, RedditUrlTypes } from "./Enums";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: {
        url: "",
        urlType: RedditUrlTypes.COMMENT,
        include: "",
        exclude: "",
        defaultExclude: false,
        graphType: GraphTypes.BAR,
      },
      graphData: [],
    };
  }

  
  handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (e.target.type === "checkbox") {
      this.setState((prevState) => ({
        userInput: { ...prevState.userInput, [name]: checked },
      }));
    } else {
      this.setState((prevState) => ({
        userInput: { ...prevState.userInput, [name]: value },
      }));
    }
  };

  
  handleSubmit = (e) => {
    e.preventDefault();

    
    document.getElementById('downloadButton').style.visibility = 'visible';

    
    this.setState((prevState) => ({
      graphData: { ...prevState.userInput, render: true },
    }));
  };

  render() {
    return (
      <div className="App">
        <WelcomeScreen />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} userInput={this.state.userInput} />
        <RenderGraph key="result" graphData={this.state.graphData} />
      </div>
    );
  }

}

export default App;
