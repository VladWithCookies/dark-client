import * as React from 'react';
import { connect } from 'react-redux';

import PrivateRouteComponent from './component';

interface IProps {
  path: string;
  exact: boolean;
  isLoggedIn: boolean;
  component: React.ReactNode;
}

class PrivateRoute extends React.Component<IProps> {
  render() {
    return (
      <PrivateRouteComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);
