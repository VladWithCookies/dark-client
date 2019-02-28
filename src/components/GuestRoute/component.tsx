import * as React from 'react';
import { Route, Redirect } from 'react-router'

interface IProps {
  component: any;
  isLoggedIn: boolean;
}

const GuestRoute = ({ isLoggedIn, component: Component, ...rest }: IProps) => (
  <Route
    {...rest}
    render={(props) => isLoggedIn
      ? <Redirect to="/" />
      : <Component {...props } />
    }
  />
);

export default GuestRoute;
