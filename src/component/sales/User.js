import React from "react";
import ProductList from "./ProductList";
import CreateButton from "./CreateButton";

const User = props => {
  const user_id = props.id.split("/")[2];
  return (
    <div className='user min-h-0 w-full px-4 overflow-auto bg-red-200'>
      <div className=' max-w-screen ml-auto pr-2 py-1 flex  sm:mr-4 mb-6 '>
        <CreateButton>Create Product</CreateButton>
      </div>
      <React.Fragment>
        <ProductList user_id={user_id} />
      </React.Fragment>
    </div>
  );
};

export default User;
