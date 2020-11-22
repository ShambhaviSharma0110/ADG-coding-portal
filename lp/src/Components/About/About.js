import React from 'react'
import "./About.css"

const About = () => {
    return (
      <div>
        <div className="about-us">
          <h1>About Us</h1>

          <h3>Welcome to the ADG-Coding Portal!</h3>
          <p>
            The objective of this website is to help one practice questions in
            <br></br>
            different programming languages and to allow one to participate
            <br></br>
            in programming contests held by the chapter!
          </p>
        </div>
        <div className="more-info">
          <h3>Apple Developer's Group</h3>
          <p>
            ADG-VIT is a student chapter with a capacity of about 100
            <br></br>
            students all working in different domains of tech such as
            <br></br>
            web dev, app dev, Design, Machine Learning,etc.
            <br></br>
            We're essentially a community of students enthusiastic about programming
          </p>
        </div>
        <div className="more-info2">
          <h3>Web Development Domain</h3>
          <p>
            This website has been developed by the web-development
            <br></br>
           domain of the chapter.
          </p>
        </div>
      </div>
    );
}

export default About;