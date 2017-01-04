import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router'; 

import App from './components/App';
import Home from './containers/Home';


ReactDOM.render(
    <Router history={browserHistory} >
      <Route component={App}>
        <Route path="/" component={Home} />
      </Route>
    </Router>
  , document.querySelector('.myApp'));
