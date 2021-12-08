import React from 'react';

const Range = (props) => (
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
