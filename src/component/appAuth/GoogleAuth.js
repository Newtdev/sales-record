import React from "react";
import google from "../../assets/google.svg";

const GoogleAuth = () => {
  return (
    <button className=' py-2 w-full border border-red-600 rounded-md shadow-lg text-red-600 text-sm flex items-center justify-evenly font-serif'>
      <img src={google} alt='google logo' className='h-6' />
      Sign In With Google
    </button>
  );
};

export default GoogleAuth;
