// import { useState } from "react";
interface InputProps {
    item: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ item, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      className="inputBar"
      type="text"
      name=""
      id=""
      placeholder="Enter Items here"
      value={item}
    />
  );
};
