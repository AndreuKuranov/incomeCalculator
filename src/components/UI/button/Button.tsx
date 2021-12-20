import React, { FC } from 'react';
import cn from 'classnames';
import classes from './Button.module.css';

interface ButtonProps {
  className?: string,
  type?: "button" | "reset" | "submit",
  onClick: () => void,
  title?: string,
}

const Button: FC<ButtonProps> = (props) => (
  <button
    className={cn(classes.myBtn, props.className)}
    type={props.type || 'button'}
    onClick={props.onClick}
    title={props.title}
  >
    {props.children}
  </button>
);

export default Button;
