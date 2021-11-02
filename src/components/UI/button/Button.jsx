/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */

import React from 'react';
import classes from './Button.module.css';

const Button = ({ children, ...props }) => (
  <button {...props} className={`${classes.myBtn} ${props.className}`}>
    {children}
  </button>
);

export default Button;
