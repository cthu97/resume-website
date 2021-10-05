/* eslint-disable jsx-a11y/alt-text */
import "./Home.css";
import "@fontsource/roboto";

const Home = () => {
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
      <body>
        <a href="https://github.com/cthu97">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.9yaAIVEhbwVgZ4OVFL82QQHaHa%26pid%3DApi&f=1"
            id="github"
          />
        </a>
        <h2>Projects</h2>
        <div class="projects">
          <a href="https://github.com/cthu97/sniffles">Sniffles</a>
          <p>Find your pet some furry pals!</p>
          <img className="projectPics" src="https://raw.githubusercontent.com/AcChrome/sniffles/master/images/candidates.png"/>
          <a href="https://github.com/cthu97/Gotta-go">Gotta Go</a>
          <p>Customizable map for all your bathroom needs!</p>
          <img className="projectPics" src="https://raw.githubusercontent.com/cthu97/Gotta-go/master/screenshots/map.png"/>
          <a href="https://github.com/cthu97/scheduler">Scheduler</a>
          <p>For all your scheduling needs!</p>
          <img className="projectPics" src="https://raw.githubusercontent.com/cthu97/scheduler/master/docs/appointment-form.png"/>
          <a href="https://github.com/cthu97/tweeter">Tweeter</a>
          <p>Single page twitter clone with responsive design</p>
          <img className="projectPics" src="https://raw.githubusercontent.com/cthu97/tweeter/master/docs/front-page.png"/>
          <a href="https://github.com/cthu97/jungle-rails">Jungle Rails</a>
          <p>Ecommerce website created using Ruby on Rails and Stripe</p>
          <img className="projectPics" src="https://raw.githubusercontent.com/cthu97/jungle-rails/master/docs/loggedinuser.png"/>
          
        </div>
      </body>
    </>
  );
};

export default Home;
