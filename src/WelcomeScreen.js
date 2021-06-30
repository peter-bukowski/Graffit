import React, { useRef, Component } from 'react';
import { useSpring, animated, useChain } from 'react-spring';
import "./css/WelcomeScreen.css";


class WelcomeScreen extends Component {
  render() {
    return(
      <div className="WelcomeScreen">
        <div id="welcomeText">
          <div>
            <h1>WELCOME TO</h1>
          </div>

          <hr></hr>

          <div>
            <h2>GRAFFIT</h2>
          </div>
        </div>
      </div>
    )
  }
};

export default WelcomeScreen;