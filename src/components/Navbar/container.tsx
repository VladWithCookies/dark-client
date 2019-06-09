import { connect } from 'react-redux';

import { logout } from '../../concepts/auth/actions'
import Navbar from './component';

const mapDispatchToProps = {
  onLogout: logout
}

export default connect(null, mapDispatchToProps)(Navbar);
