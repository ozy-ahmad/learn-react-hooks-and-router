import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbars";
import Home from "./pages/Home";
import Article from "./pages/Article";
import DetailArticle from "./pages/DetailArticle";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Article" component={Article} />
        <Route exact path="/Article/:id" component={DetailArticle} />
      </Switch>
    </Router>
  );
}

export default App;
