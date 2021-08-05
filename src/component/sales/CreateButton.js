import React from "react";
import { Link } from "react-router-dom";

const CreateButton = ({ children }) => {
  return (
    <Link
      className='inline-block py-2.5 rounded px-4 align-baseline font-bold text-sm bg-blue-800 text-white hover:text-blue-200 hover:bg-blue-700 mt-4 shadow-lg'
      to='/product/new'>
      {children}
    </Link>
  );
};

export default CreateButton;
