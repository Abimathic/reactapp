import React from 'react';
import App from './App.jsx';
import ReactDOMS from 'react-dom';
import Home from './home.jsx';
import Param from './param.jsx';
import Routes from './routes.jsx';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

console.log("abi");
console.log(React);
console.log("reactDOMS")
{// ReactDOMS.render(<App headerProp = "Header from props..."/>, document.getElementById('app'));
}


ReactDOMS.render((
  <Router history = {browserHistory} >
    <Route path = "/" component = {Routes}>
      <IndexRoute component = {App} />
      <Route path = "home" component = {Home} />
      <Route path = "map/:id" component = {Param} />
      <Route path = "back" component = {App} />
    </Route>
  </Router>), document.getElementById('app'));
{// setTimeout(() => {
   // ReactDOMS.unmountComponentAtNode(document.getElementById('app'));}, 5000);
}

