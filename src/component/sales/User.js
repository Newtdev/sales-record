import React from "react";
import CreateButton from "./CreateButton";

const User = () => {
  return (
    <div className='bg-blue h-full w-1/2'>
      <div className='w-52 ml-auto flex justify-center items-center'>
        <CreateButton />
      </div>
    </div>
  );
};

export default User;
