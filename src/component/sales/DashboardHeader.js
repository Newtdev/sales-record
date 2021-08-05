import React from "react";

const DashboardHeader = () => {
  return (
    <div>
      <div className='w-screen h-14 bg-white shadow-md flex items-center'>
        <div className='w-36 h-16 ml-auto flex justify-around items-center mr-6'>
          <p className='text-gray-800 font-medium font-serif'> Hi, Thomas</p>
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
