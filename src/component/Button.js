import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className='inline-block py-2.5 rounded px-4 align-baseline font-bold text-sm bg-blue-800 text-white hover:text-blue-200 hover:bg-blue-700 mt-4 shadow-lg'
      type='submit'>
      {children}
    </button>
  );
};

export default Button;
