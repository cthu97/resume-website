/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "./Header";
import "./Projects.css";

const Projects = () => {
  return (
    <>
    <Header/>
      <body>
        <a href="https://github.com/cthu97">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.9yaAIVEhbwVgZ4OVFL82QQHaHa%26pid%3DApi&f=1"
            id="github"
          />
        </a>
        <h2>Projects</h2>
        <div class="projects">
          <a href="https://github.com/cthu97/sniffles" class="names">
            Sniffles
          </a>
          <p>Find your pet some furry pals!</p>
          <img
            className="projectPics"
            src="https://raw.githubusercontent.com/AcChrome/sniffles/master/images/candidates.png"
          />
          <a href="https://github.com/cthu97/Gotta-go" class="names">
            Gotta Go
          </a>
          <p>Customizable map for all your bathroom needs!</p>
          <img
            className="projectPics"
            src="https://raw.githubusercontent.com/cthu97/Gotta-go/master/screenshots/map.png"
          />
          <a href="https://github.com/cthu97/scheduler" class="names">
            Scheduler
          </a>
          <p>For all your scheduling needs!</p>
          <img
            className="projectPics"
            src="https://raw.githubusercontent.com/cthu97/scheduler/master/docs/appointment-form.png"
          />
          <a href="https://github.com/cthu97/tweeter" class="names">
            Tweeter
          </a>
          <p>Single page twitter clone with responsive design</p>
          <img
            className="projectPics"
            src="https://raw.githubusercontent.com/cthu97/tweeter/master/docs/front-page.png"
          />
          <a href="https://github.com/cthu97/jungle-rails" class="names">
            Jungle Rails
          </a>
          <p>Ecommerce website created using Ruby on Rails and Stripe</p>
          <img
            className="projectPics"
            src="https://raw.githubusercontent.com/cthu97/jungle-rails/master/docs/loggedinuser.png"
          />
        </div>
      </body>
    </>
  );
};

export default Projects;
