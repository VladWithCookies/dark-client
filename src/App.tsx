import React, { Component } from 'react';
import { Router, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Login from './screens/Login';
import Stub from './components/Stub';
import PrivateRoute from './components/PrivateRoute';
import GuestRoute from './components/GuestRoute';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Stub} />
          <GuestRoute exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
