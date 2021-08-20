import React from "react";
import { Link } from "react-router-dom";

const CreateButton = ({ children }) => {
  return (
    <Link
      to='/product/new'
      className='add-product w-64 h-80 pb-6 mx-auto sm:mx-0 rounded-lg shadow-lg bg-purple-700 border border-purple-900'>
      <div className='h-full w-full flex justify-center items-center '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-16 w-16'
          fill='none'
          viewBox='0 0 24 24'
          stroke='#fff'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 4v16m8-8H4'
          />
        </svg>
      </div>
    </Link>
  );
};

export default CreateButton;
