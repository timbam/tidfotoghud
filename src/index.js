import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Behandlinger from './components/Behandlinger';
import Om from './components/Om';
import Kontakt from './components/Kontakt';
import BestillTime from './components/BestillTime';

ReactDOM.render(
    <Router history={browserHistory} >
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/Om" component={Om} />
        <Route path="/Behandlinger" component={Behandlinger} />
        <Route path="/Kontakt" component={Kontakt} />
        <Route path="/BestillTime" component={BestillTime} />
      </Route>
    </Router>
  , document.querySelector('.myApp'));
