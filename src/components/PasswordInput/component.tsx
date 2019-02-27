import * as React from 'react';
import { InputGroup, Intent } from '@blueprintjs/core';

import { IFormField } from '../../types';
import LockButton from './LockButton';

interface IProps {
  error?: string;
  field: IFormField;
  large?: boolean;
  placeholder?: string;
  onLockClick: VoidFunction;
  showPassword: boolean;
};

const PasswordInput = ({
  large,
  field,
  error,
  placeholder,
  onLockClick,
  showPassword,
}: IProps) => (
  <React.Fragment>
    <div className="form__error">
      {error}
    </div>
    <InputGroup
      {...field}
      type={showPassword ? 'text' : 'password'}
      large={large}
      placeholder={placeholder}
      intent={error ? Intent.DANGER : Intent.NONE}
      rightElement={
        <LockButton
          onLockClick={onLockClick}
          showPassword={showPassword}
        />
      }
    />
  </React.Fragment>
);

export default PasswordInput;
