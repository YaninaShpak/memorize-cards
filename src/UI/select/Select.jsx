import React from 'react';
import cl from './Select.module.css';

const Select = ({options, defaultValue, value, onChange}) => {
  return (
    <select className={cl.selectCard}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="" disabled>{defaultValue}</option>
      {options.map(option =>
        <option
          key={option.value}
          value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};

export default Select;