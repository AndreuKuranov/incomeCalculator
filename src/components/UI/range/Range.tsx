import React, { FC } from 'react';

interface RangeProps {
  className?: string,
  type: string,
  id?: any,
  value: number | string,
  onChange: any,
  min: string,
  max: string,
}

const Range: FC<RangeProps> = (props) => (
  <input
    className={props.className}
    type={props.type}
    id={props.id}
    value={props.value}
    onChange={props.onChange}
    min={props.min}
    max={props.max}
  />
);

export default Range;
