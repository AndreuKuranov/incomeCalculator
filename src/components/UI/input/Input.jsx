/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import classes from './Input.module.css';

const Input = (props) => (
  <input {...props} className={`${classes.myInput} ${props.className}`} />
);

export default Input;
