import React from 'react'
import { connect } from 'react-redux'

import { getCurrentUser } from '../../concepts/user/actions'
import PrivateLayoutComponent from './component'

interface IProps {
  children: JSX.Element
  getCurrentUser: VoidFunction
}

class PrivateLayout extends React.Component<IProps> {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <PrivateLayoutComponent {...this.props} />
    )
  }
}

const mapDispatchToProps = { getCurrentUser }

export default connect(null, mapDispatchToProps)(PrivateLayout)
