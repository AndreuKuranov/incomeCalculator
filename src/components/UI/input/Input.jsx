import React from 'react';
import cn from 'classnames';
import classes from './Input.module.css';

const Input = (props) => (
  <input
    className={cn(classes.myInput, props.className)}
    autoсomplete={props.autoсomplete}
    type={props.type}
    placeholder={props.placeholder}
    id={props.id}
    onChange={props.onChange}
  />
);

export default Input;
