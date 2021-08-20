import React from "react";
import ProductList from "./ProductList";
// import CreateButton from "./CreateButton";

const User = props => {
  const user_id = props.id.split("/")[2];
  return (
    <div className=' min-h-0 w-full px-4 overflow-auto mt-5 flex items-center'>
      <div className=' max-w-screen flex justify-center items-center mr-5'>
        {/* <CreateButton>Create Product</CreateButton> */}
      </div>
      <ProductList user_id={user_id} />
    </div>
  );
};

export default User;
