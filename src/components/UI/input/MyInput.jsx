/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => (
  <input {...props} className={`${classes.myInput} ${props.className}`} />
);

export default MyInput;
