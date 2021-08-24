import "./App.css";

import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import About from "./components/About";
import Videos from "./components/Videos";
import Error from "./components/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/videos">
          <Videos />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
