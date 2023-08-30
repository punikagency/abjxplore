import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ label, ...inputProps }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}
      <input {...inputProps} className="px-4 py-2" />
    </div>
  );
};

export default Input;
