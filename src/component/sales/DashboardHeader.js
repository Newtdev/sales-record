import React from "react";
import Header from "../Header";
// import { Link } from "react-router-dom";
import SignOut from "./SignOut";

const DashboardHeader = props => {
  return (
    <div className='w-screen'>
      <div className='w-full h-16 mx-auto bg-purple-800 '>
        <Header></Header>
        <div className='h-full w-32 ml-10 ml-auto flex items-center'>
          {/* <SignOut /> */}
          {/* <div className=''>
          </div> */}
          {/* <Link to='/' className='text-3xl font-extrabold text-white'>
            WDS
          </Link> */}
        </div>
        {/* <div className='w-56 h-12 ml-auto flex justify-around items-center mr-12'>
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
        </div> */}
      </div>
    </div>
  );
};

export default DashboardHeader;
