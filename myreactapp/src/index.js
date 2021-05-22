import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";
import BillPage from "./billPage"
import AdminPage from "./AdminPage"
import Login from "./Login"

// import AdminPage from "./AdminPage";
// import CarouselComponent from "./carousalComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/AdminPage" component={AdminPage} />
      <Route path="/bill" component={BillPage} />
      <Route exact path="/login" component={Login} />


    </Switch>
  </BrowserRouter>,
  rootElement
);


