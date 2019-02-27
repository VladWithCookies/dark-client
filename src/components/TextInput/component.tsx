import * as React from 'react'
import { InputGroup, Intent } from '@blueprintjs/core';

import { IFormField } from '../../types';

interface IProps {
  error?: string;
  large?: boolean;
  field: IFormField;
  placeholder?: string;
}

const TextInput = ({ large, placeholder, field, error }: IProps) => (
  <React.Fragment>
    <div className="form__error">
      {error}
    </div>
    <InputGroup
      {...field}
      large={large}
      intent={error ? Intent.DANGER : Intent.NONE}
      placeholder={placeholder}
    />
  </React.Fragment>
);

export default TextInput;
