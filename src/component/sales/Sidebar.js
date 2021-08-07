import React from "react";

const Sidebar = () => {
  return (
    <div className='w-96 h-full bg-white hidden sm:block' id='side-on-mobile'>
      {/* description container */}
      <div className='h-80 flex items-center' id='side-bar-content'>
        <div className='w-72 mx-4'>
          <h2 className='font-bold font-serif text-3xl'>
            WELCOME BACK TO YOUR DASHBORD JAMES
          </h2>
        </div>
        <div className=''></div>
      </div>
    </div>
  );
};

export default Sidebar;
