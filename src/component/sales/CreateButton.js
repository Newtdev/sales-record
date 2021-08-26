import React from "react";
import { Link } from "react-router-dom";

const CreateButton = props => {
  return (
    <Link
      to={`/product/new/${props.userid}`}
      className='px-2 py-3 sm:py-3 sm:px-6 bg-gray-200 text-purple-800 border-gray-300 font-semibold rounded-sm sm:rounded-md hover:bg-gray-300'>
      <div className='h-full w-full flex justify-center items-center '>
        Create product
        {/* <svg
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
        </svg> */}
      </div>
    </Link>
  );
};

export default CreateButton;
