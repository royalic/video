import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import login from './login';
import register from './register';
import member from './member';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom'

const SliderComponent = () => (
  <Switch>
    <Route path="/" exact component={App}/>
    <Route path="/login" component={login}/>
    <Route path="/register" component={register}/>
    <Route path="/member" component={member}/>
  </Switch>
)

ReactDOM.render((
  <HashRouter >
    <SliderComponent />
  </HashRouter>
), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

