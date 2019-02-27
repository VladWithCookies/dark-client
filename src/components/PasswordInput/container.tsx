import * as React from 'react';

import { IFormField } from '../../types';
import PasswordInputComponent from './component';

interface IProps {
  placeholder?: string;
  large?: boolean;
  error?: string;
  field: IFormField;
}

interface IState {
  showPassword: boolean;
}

class PasswordInput extends React.Component<IProps, IState> {
  state = {
    showPassword: false
  }

  handleLockClick = (): void => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <PasswordInputComponent
        {...this.props}
        onLockClick={this.handleLockClick}
        showPassword={this.state.showPassword}
      />
    );
  }
}

export default PasswordInput;
