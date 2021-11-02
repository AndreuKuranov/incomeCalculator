import React from 'react';
import classes from './Select.module.css';

const Select = ({
  options, value, onChange, ...props
}) => (
  <select
    className={`${classes.mySelect} ${props.className}`}
    value={value}
    onChange={(event) => onChange(event.target.value)}
  >
    {options.map((option) => (
      <option
        key={option.value}
        value={option.value}
      >
        {option.name}
      </option>
    ))}
  </select>
);

export default Select;
