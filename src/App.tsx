import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Login from './screens/Login';
import Stub from './components/Stub';
import PrivateRoute from './components/PrivateRoute';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Stub} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
