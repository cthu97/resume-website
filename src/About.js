import React from "react";
import Header from "./Header";
import "./About.css";

const About = () => {
  return (
    <>
      <header>
        <a
          className="resume"
          href="https://resume.creddle.io/resume/1hfgj7rzygg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </header>
      <h3 className="about">
        A passionate full-stack web developer who discovered the joy of
        programming.
      </h3>
      <p> I am interested in and welcome any web development opportunities.</p>
  
      <p>Skills:</p>
      <div className="skills">
        <span>JavaScript</span>
        <span>NodeJS</span>
        <span>React</span>
        <span>Ruby</span>
        <span>PSQL</span>
        <span>Express</span>
        <span>EJS</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Rails</span>
        <span>AJAX</span>
        <span>jQuery</span>
        <span>Socket.io</span>
        <span>RESTful programming</span>
      </div>
    </>
  );
};
export default About;
