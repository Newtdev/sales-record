import React from "react";

const Button = ({ children }) => {
  return (
    <button className='mt-3 w-full block rounded-md border border-gray-300 shadow-lg bg-white text-base py-2 px-4 mx-auto text-center font-medium text-gray-700 hover:bg-gray-50 focus:outline-none '>
      {children}
    </button>
  );
};

export default Button;
