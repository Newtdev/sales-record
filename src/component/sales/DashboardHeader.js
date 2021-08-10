import React from "react";
import Header from "../Header";

const DashboardHeader = () => {
  return (
    <div className='w-screen bg-blue-900'>
      <div className='w-full h-14 mx-auto shadow-md flex items-center'>
        <Header></Header>
        <div className='w-56 h-12 ml-auto flex justify-around items-center mr-12'>
          <p className='text-gray-800 font-medium font-serif mr-1'>
            {" "}
            Hi, Thomas
          </p>
          <div className=' h-12 w-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full relative '>
            <img
              className='inline-block h-10 w-10 rounded-full ring-2 ring-red-500 absolute bottom-1 right-1'
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt='user_avatar'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
