import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/">
            <Redirect to="/projects"/>
          </Route>
          <Route exact path="/projects">
            <Header />
            <Projects />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
