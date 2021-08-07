import React from "react";
import CreateButton from "./CreateButton";
import ProductCard from "./ProductCard";

const User = () => {
  return (
    <div className='bg-blue h-full w-full px-4'>
      <div className='w-52 h-20 ml-auto flex justify-end sm:justify-center items-center mr-2 sm:mr-4 mb-4'>
        <CreateButton>Create Product</CreateButton>
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default User;
