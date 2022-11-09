import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Home from "./Home.js";
import Projects from "./Projects.js";
import NotFound from "./NotFound.js";
import './css/style.css';

function App() {
  return (
    <BrowserRouter>
     <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route exact path="/projects">
    <Projects />
    </Route>
    <Route exact path="*">
    <NotFound />
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;