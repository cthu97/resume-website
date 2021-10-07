/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <>
      <head>
        <div class="container">
          <h1>Catherine Hu</h1>
        </div>
        <img
          src="https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/116047138_10222884167628237_1305149405074384017_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=oDStaI_mZ1cAX89ACTz&_nc_ht=scontent.fyvr4-1.fna&oh=645a61bb1378aafdd582246b5a6e06ab&oe=61840040"
          className="pfp"
        ></img>
      </head>
      <div class="links">
        <Link to="/about" className="link">About me</Link>
        <Link to="/projects"className="link">Projects</Link>
        <Link to="/contact"className="link">Contact</Link>
      </div>
    </>
  );
};

export default Header