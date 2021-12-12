import React from 'react';
import cn from 'classnames';
import classes from './Select.module.css';

const Select = ({
  options, defaultName, value, onChange, ...props
}) => (
  <select
    className={cn(classes.mySelect, props.className)}
    value={value}
    onChange={(event) => onChange(event.target.value)}
  >
    <option value={props.defaultValue}>{defaultName}</option>
    {options.map((option) => (
      <option
        key={option.name}
        value={option.value}
      >
        {option.name}
      </option>
    ))}
  </select>
);

export default Select;
