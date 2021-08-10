import React from "react";
import ButtonLink from "../Link";
import Button from "../sales/Button";

const ProductCard = () => {
  return (
    <div className='h-96 w-60 mx-auto sm:mx-0 sm:max-w-6xl sm:w-80 rounded-md shadow-lg bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900'>
      <div className='h-full w-full mx-auto px-4'>
        <div id='product-name'>
          <h2 className='text-2xl text-white font-bold pt-2'>Coca cola</h2>
        </div>
        <div
          className='w-full py-2 flex flex-col justify-around'
          id='container'>
          <span
            className='flex justify-between max-w-full py-1 px-2 font-bold text-md sm:text-lg text-white'
            id='quantity'>
            <p>Quantity:</p>
            <p>120</p>
          </span>
          <span
            className='flex justify-between max-w-full py-1 px-2 font-bold text-md sm:text-lg text-white'
            id='cost-price'>
            <p>Cost Price:</p>
            <p>N200000</p>
          </span>
          <span
            className='flex justify-between max-w-full px-2 py-1 font-bold text-md sm:text-lg text-white'
            id='selling-price'>
            <p>Selling Price:</p>
            <p>N5000000</p>
          </span>
        </div>
        <div className='' id='button-container'>
          <ButtonLink>Add Quantity</ButtonLink>
        </div>
        <div>
          <ButtonLink>Edit Product</ButtonLink>
        </div>
        <div>
          <Button className='block w-full py-3 rounded px-4 align-baseline font-bold text-sm text-white bg-red-700 hover:bg-red-600 mt-4 shadow-lg'>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
