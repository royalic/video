import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import login from './login';
import register from './register';
import member from './member';
import { HashRouter, Route, Switch } from 'react-router-dom'

const SliderComponent = () => (
  <Switch>
    <Route exact path="/member"  component={member}/>

     <Route exact path="/register"  component={register}/>  
    <Route exact path="/login" component={login}/> 
    <Route exact path="/"  component={App}/>


  </Switch>
)

ReactDOM.render((
  <HashRouter >
    <SliderComponent />
  </HashRouter>
), document.getElementById('root'));
