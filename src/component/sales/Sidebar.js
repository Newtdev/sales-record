import React from "react";

const Sidebar = () => {
  return (
    <div className='w-80 h-full bg-gray-400' id='side-on-mobile'>
      {/* description container */}
      <div className='h-80 bg-white flex items-center' id='side-bar-content'>
        <div className='h-48 mx-4'>
          <h2 className='font-semibold font-serif text-2xl text-left'>
            WELCOME BACK TO YOUR DASHBORD JAMES
          </h2>
        </div>
        <div className=''></div>
      </div>
    </div>
  );
};

export default Sidebar;
