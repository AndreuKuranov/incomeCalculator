import React from 'react';
import cn from 'classnames';
import classes from './Button.module.css';

const Button = ({ children, ...props }) => (
  <button
    className={cn(classes.myBtn, props.className)}
    type={props.type || 'button'}
    style={props.style}
    onClick={props.onClick}
    title={props.title}
  >
    {children}
  </button>
);

export default Button;
