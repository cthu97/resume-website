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
        <img src="https://i.ibb.co/c2xrFGx/3.png" id="bracket1" />
        A passionate full-stack web developer who discovered the joy of
        programming.
        <img src="https://i.ibb.co/5KTHCZ9/4.png" id="bracket2" />
      </h3>
      <p> I am interested in and welcome any web development opportunities.</p>
      <p>pls hire me</p>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ukkk7ZzbmCfR0PwQiZ2EhwHaHy%26pid%3DApi" width="200px"/>
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
