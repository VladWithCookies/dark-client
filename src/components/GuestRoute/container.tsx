import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '../../concepts/rootReducer';
import GuestRouteComponent from './component';

interface IProps {
  path: string;
  exact: boolean;
  isLoggedIn: boolean;
  component: React.ReactNode;
}

class GuestRoute extends React.Component<IProps> {
  render() {
    return (
      <GuestRouteComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(GuestRoute);
