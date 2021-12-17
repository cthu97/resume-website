/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <>
      <html>
          <h1>Catherine Hu</h1>
      </html>
        <a href="/projects">
        </a>
      <div className="links">
        <Link to="/about" className="link">ABOUT</Link>
        <Link to="/projects"className="link">PROJECTS</Link>
        <Link to="/contact"className="link">CONTACT</Link>
      </div>
    </>
  );
};

export default Header