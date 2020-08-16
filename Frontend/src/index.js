import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainPage from './pages/MainPage/MainPage'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={["/", "/login"]} exact={true} component={App} />
      <Route path="/matches" exact={true} component={MainPage} />
      <Route path="*" exact={true} component={NotFound} />
    </Switch>
  </BrowserRouter>,
document.getElementById('root'));