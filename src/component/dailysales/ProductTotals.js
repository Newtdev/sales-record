import React from "react";

const ProductTotals = ({ children }) => {
  return (
    <div className='h-40 w-72 px-10 bg-red-500 shadow-md rounded-md flex flex-col items-center justify-evenly mx-2'>
      <div className='w-52 px-2 py-4 bg-red-200 rounded-md shadow-sm'>
        <h6 className='heading font-md font-semibold text-center '>
          {children[0]}
        </h6>
      </div>

      <h6 className='heading font-md font-semibold text-center flex items-center justify-around'>
        <p className='text-2xl sm:text-4xl heading ml-0.5'>
          {children[1]}
          {children[2]}
        </p>
      </h6>
    </div>
  );
};

export default ProductTotals;
