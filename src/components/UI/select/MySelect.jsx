import React from 'react';

const MySelect = ({ options, value, onChange }) => (
  <select
    value={value}
    onChange={(event) => onChange(event.target.value)}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);

export default MySelect;
