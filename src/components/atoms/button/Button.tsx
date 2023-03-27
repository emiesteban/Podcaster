import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      className={`button ${disabled ? 'button-disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
