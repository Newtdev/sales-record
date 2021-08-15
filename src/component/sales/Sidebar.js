import React from "react";
import user from "../../assets/user_icon.svg";

const Sidebar = () => {
  return (
    <div className='w-full h-screen bg-gray-50 block' id='side-on-mobile'>
      {/* description container */}
      <div
        className='h-4/5 flex flex-col justify-evenly items-center'
        id='side-bar-content'>
        <div className='w-72 mx-4 flex justify-center items-center'>
          <img src={user} alt='user' className='h-52' />
        </div>
        <div></div>
        <div className='w-full mx-auto'>
          <h2 className='font-extrabold text-3xl text-center text-gray-800 '>
            WELCOME BACK TO YOUR DASHBORD JAMES
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
