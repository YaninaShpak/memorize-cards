import React from 'react';
import cl from './CardInput.module.css';

const CardInput = (props) => {
  return (
    <input className={cl.cardInput} {...props} />
  );
};

export default CardInput;