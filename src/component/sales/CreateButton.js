import React from "react";
import { Link } from "react-router-dom";

const CreateButton = ({ children }) => {
  return (
    <Link
      className='inline-block py-2.5 rounded px-4 align-baseline font-bold text-sm bg-blue-600 text-white  hover:bg-blue-700 mt-4 shadow-lg ml-auto'
      to='/product/new'>
      {children}
    </Link>
  );
};

export default CreateButton;
