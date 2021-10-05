import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/projects" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
