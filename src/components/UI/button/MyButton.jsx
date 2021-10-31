/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */

import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, ...props }) => (
  <button {...props} className={`${classes.myBtn} ${props.className}`}>
    {children}
  </button>
);

export default MyButton;
