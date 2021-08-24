import "./App.css";
import Navbar from "../../client/src/components/Navbar";
import Home from "../../client/src/components/Home";
import Footer from "../../client/src/components/Footer";
import { Route, Switch } from "react-router-dom";
import Feedback from "../../client/src/components/Feedback";
import Contact from "../../client/src/components/Contact";
import About from "../../client/src/components/About";
import Videos from "../../client/src/components/Videos";
import Error from "../../client/src/components/Error";

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
