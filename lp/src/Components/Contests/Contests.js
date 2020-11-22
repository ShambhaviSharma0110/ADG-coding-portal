import React, { Component } from "react";
import "./Contests.css";

class Contests extends Component {
  render() {
    return (
      <div className="contest">
        <h1>Contests</h1>
        <ul>
          <h3>Difficulty</h3>
          <input type="radio" name="diff" value="difficulty1" />
          Easy
          <input type="radio" name="diff" value="difficulty2" />
          Medium
          <input type="radio" name="diff" value="difficulty3" />
          Hard
        </ul>
        <div className="problems">
          <p>Section for problems</p>
        </div>
      </div>
    );
  }
}

export default Contests;
