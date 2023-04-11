// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { type ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps): JSX.Element => {
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
