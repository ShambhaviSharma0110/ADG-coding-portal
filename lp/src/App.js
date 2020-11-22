import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contests from "./Components/Contests/Contests";
import Profile from "./Components/Profile/Profile";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contests">Contests</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              Logout
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contests" component={Contests} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
