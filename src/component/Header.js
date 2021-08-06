import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const URL = props.signed ? "/" : "/Signup";
  return (
    <div className='h-14 w-screen shadow-sm'>
      <div className=' h-full w-full sm:px-16 mx-auto flex justify-between items-center'>
        <div className='h-full w-32 ml-10 flex items-center'>
          <span className='text-3xl font-extrabold text-white'>WDS</span>
        </div>
        <div className='mr-5'>
          <Link
            to={URL}
            href='#'
            className='w-full flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
            {props.signed ? "Sign In" : "Sign Up"}
          </Link>
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
