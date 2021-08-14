import React from "react";
import ProductList from "./ProductList";
import CreateButton from "./CreateButton";

const User = () => {
  return (
    <div className='user h-screen w-full px-4 overflow-auto'>
      <div className=' max-w-screen ml-auto pr-2 py-1 flex  sm:mr-4 mb-6 '>
        <CreateButton>Create Product</CreateButton>
      </div>
      <React.Fragment>
        <ProductList />
      </React.Fragment>
    </div>
  );
};

export default User;
