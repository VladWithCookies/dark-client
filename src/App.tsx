import React, { Component } from 'react';
import { Router, Switch } from 'react-router';

import { history } from './store';
import Login from './screens/Login';
import Messanger from './screens/Messanger';
import PrivateRoute from './components/PrivateRoute';
import GuestRoute from './components/GuestRoute';
import PrivateLayout from './components/PrivateLayout'
import './index.scss'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <GuestRoute exact path="/login" component={Login} />

          <PrivateLayout>
            <GuestRoute exact path="/messanger" component={Messanger} />
          </PrivateLayout>
        </Switch>
      </Router>
    );
  }
}

export default App;
