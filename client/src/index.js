import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/style.css';
import BillPage from './bill_components/billPage';
import AdminPage from './admin_components/AdminPage';
import Login from './admin_components/Login';

// import AdminPage from "./AdminPage";
// import CarouselComponent from "./carousalComponent";

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/AdminPage' component={AdminPage} />
      <Route path='/bill' component={BillPage} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
