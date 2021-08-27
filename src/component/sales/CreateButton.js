import React from "react";
import { Link } from "react-router-dom";

const CreateButton = props => {
  return (
    <Link
      to={`/product/new/${props.userid}`}
      className='h-80 w-60 bg-purple-900 font-semibold rounded-sm sm:rounded-md hover:bg-purple-800 mb-4'>
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
