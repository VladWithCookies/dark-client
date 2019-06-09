import React, { Component } from 'react';
import { Router, Switch } from 'react-router'

import { history } from './store';
import Login from './screens/Login';
import Stub from './components/Stub';
import PrivateRoute from './components/PrivateRoute';
import GuestRoute from './components/GuestRoute';
import PrivateLayout from './components/PrivateLayout'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <GuestRoute exact path="/login" component={Login} />

          <PrivateLayout>
            <PrivateRoute exact path="/" component={Stub} />
          </PrivateLayout>
        </Switch>
      </Router>
    );
  }
}

export default App;
