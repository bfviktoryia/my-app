import React from 'react';

import './Button.scss';

type PropsType = {
  style: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactNode
};

const Button: React.FC<PropsType> = ({ 
  style, 
  onClick, 
  children 
}) => {
  
  return (
    <button 
        className={`button-style _${style}`} 
        onClick={onClick}
        >
          {children}
    </button>
  );
};

export default Button;