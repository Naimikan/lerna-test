import React, { Fragment } from 'react';
import Label from '@lerna-test/label';

const Input = ({
  className = '',
  type,
}) => (
  <Fragment>
    <Label>My Input</Label>
    <input className={`gz-input ${className}`} type={type} />
  </Fragment>
);

export default Input;
