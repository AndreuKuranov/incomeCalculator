import React, { FC } from 'react';
import cn from 'classnames';
import classes from './Input.module.css';

interface InputProps {
  className?: string,
  type: string,
  autoсomplete?: string,
  placeholder?: string,
  id?: any,
  value: number | string,
  onChange: any,
  onFocus: any,
  onBlur: any,
}

const Input: FC<InputProps> = (props) => (
  <input
    className={cn(classes.myInput, props.className)}
    autoComplete={props.autoсomplete}
    type={props.type}
    placeholder={props.placeholder}
    id={props.id}
    value={props.value}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
  />
);

export default Input;
