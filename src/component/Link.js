import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ children }) => {
  // const buttonPath = () => {
  //   if (children === "Edit Product") {
  //     return "/product/edit";
  //   }
  //   if (children === "Add quantity") return "/product/add";
  // };

  return (
    <Link
      to='/'
      className='inline-block w-full py-3 sm:py-2.5 rounded px-4 align-baseline font-bold text-sm text-center text-white bg-blue-600 hover:bg-blue-700 mt-4 shadow-lg'
      type='submit'>
      {children}
    </Link>
  );
};

export default ButtonLink;
