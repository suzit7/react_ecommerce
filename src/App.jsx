import React from "react";
import { Switch, Route } from "react-router";

import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
