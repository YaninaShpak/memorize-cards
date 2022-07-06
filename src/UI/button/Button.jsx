import React from 'react';
import cl from './Button.module.css';

const Button = ({ children, className, ...props }) => {
  let classes = [cl.button];
  if (className) {
    classes.push(className)
  }
  return (
    <button {...props} className={classes.join(' ')}>{children}</button>
  );
};

export default Button;