import React from 'react';
import './Button.scss';

type PropsType = {
  color: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactNode
};

const Button: React.FC<PropsType> = ({ 
  color, 
  onClick, 
  children 
}) => {
  
  return (
    <button className={`button-style _${color}`} 
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;