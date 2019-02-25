import * as React from 'react';
import { Intent, Tooltip, Button } from '@blueprintjs/core';

interface IProps {
  onLockClick: VoidFunction;
  showPassword: boolean;
};

const LockButton = ({ showPassword, onLockClick }: IProps) => (
  <Tooltip
    content={`${showPassword ? 'Hide' : 'Show'} Password`}
  >
    <Button
      minimal
      icon={showPassword ? 'unlock' : 'lock'}
      intent={Intent.WARNING}
      onClick={onLockClick}
    />
  </Tooltip>
);

export default LockButton;
