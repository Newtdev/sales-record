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
        <div className='mr-8'>
          {children ? (
            <Link
              to='/'
              href='#'
              className='w-full flex items-center justify-center px-2 sm:px-4 py-2 font-bold text-lg text-base font-medium text-white'>
              {children}
            </Link>
          ) : (
            ""
          )}

          {/* <p className='mt-6 text-center text-base font-medium text-gray-500'>
            Existing customer?
            <a href='#' class='text-indigo-600 hover:text-indigo-500'>
              Sign in
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
