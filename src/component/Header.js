import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <div className='h-16 w-screen'>
      <div className=' h-full w-full sm:px-16 mx-auto flex justify-between items-center'>
        <div className='h-full w-32 ml-10 sm:ml-2 flex items-center'>
          <Link to='/' className='text-3xl font-extrabold text-white logo'>
            WDS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
