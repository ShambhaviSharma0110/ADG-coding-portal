import React, { Component } from "react";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="homee">
        <h1 id="top">Welcome to the ADG Coding Portal!</h1><br></br>
        <h3>Click on any of the links in the boxes to get started with solving problems!</h3>
        <div className="card1">
          <a href="cpp">
            <h1>C++</h1>
          </a>
        </div>
        <div className="card2">
          <a href="ps">
            <h1>Problems</h1>
          </a>
        </div>
        <div className="card3">
          <a href="js">
            <h1>Javascript</h1>
          </a>
        </div>
        <div className="card4">
          <a href="java">
            <h1>Java</h1>
          </a>
        </div>
        <div className="points">
          <h3>Points:100</h3>
          <a href="msp">
            <h4>Most Solved Problems:</h4>
          </a>
          <a href="msp">
            <h4>Recently Solved Problems:</h4>
          </a>
        </div>
        <div className="footer">
          <div class="footer-icons">
            <a href="https://www.facebook.com/vitios">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://github.com/ADG-VIT">
              <i class="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/company/adgvit/">
              <i class="fa fa-linkedin"></i>
            </a>
            <br></br>
            <a href="https://adgvit.com/" id="one">
              https://adgvit.com/
            </a>
            {
            /*
            <br></br>
            <a href="#">appledevelopersgroup@gmail.com</a>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;