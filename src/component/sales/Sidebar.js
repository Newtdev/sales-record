import React from "react";
import user from "../../assets/user_icon.svg";
import SignOut from "./SignOut";

const Sidebar = () => {
  return (
    <div
      className='w-96 h-full bg-blue-900 hidden sm:block'
      id='side-on-mobile'>
      {/* description container */}
      <div
        className='h-80 flex flex-col justify-between items-center'
        id='side-bar-content'>
        <div className='w-72 mx-4'>
          <img src={user} alt='user' className='h-60 bg-white' />
        </div>
        <div>
          <SignOut />
        </div>
        <div className='ml-6 mt-4'>
          <h2 className='font-extrabold text-3xl text-white '>
            WELCOME BACK TO YOUR DASHBORD JAMES
          </h2>
        </div>
        <div className=''></div>
      </div>
    </div>
  );
};

export default Sidebar;
