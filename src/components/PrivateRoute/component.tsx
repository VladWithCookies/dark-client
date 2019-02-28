import * as React from 'react';
import { Route, Redirect } from 'react-router'

interface IProps {
  component: any;
  isLoggedIn: boolean;
}

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }: IProps) => (
  <Route
    {...rest}
    render={(props) => isLoggedIn
      ? <Component {...props } />
      : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
