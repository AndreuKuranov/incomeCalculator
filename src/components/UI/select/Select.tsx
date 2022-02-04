import React, { FC } from 'react';
import cn from 'classnames';
import classes from './Select.module.css';
import { LanguagesType } from '../../../types/types';

interface SelectProps {
  className?: string,
  defaultName: string | undefined,
  onChange: any,
  options: LanguagesType[],
  defaultValue: string,
  value?: any,
}

const Select: FC<SelectProps> = ({
  options, defaultName, onChange, ...props
}) => (
  <select
    className={cn(classes.mySelect, props.className)}
    value={props.value} // value={props.defaultValue}
    onChange={onChange}
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
