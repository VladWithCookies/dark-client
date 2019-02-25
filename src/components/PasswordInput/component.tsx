import * as React from 'react';
import { InputGroup } from '@blueprintjs/core';

import LockButton from './LockButton';

interface IProps {
  placeholder?: string;
  onLockClick: VoidFunction;
  showPassword: boolean;
  large?: boolean;
};

const PasswordInput = ({ placeholder, onLockClick, showPassword, large }: IProps) => (
  <InputGroup
    large={large}
    placeholder={placeholder}
    type={showPassword ? 'text' : 'password'}
    rightElement={
      <LockButton
        onLockClick={onLockClick}
        showPassword={showPassword}
      />
    }
  />
);

export default PasswordInput;
