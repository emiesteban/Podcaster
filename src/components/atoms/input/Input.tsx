import React from 'react';
import './Input.css';

type InputProps = {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

const Input = ({ label, value, placeholder, onChange }: InputProps) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        className="input-field"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
