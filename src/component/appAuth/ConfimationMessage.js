import React from "react";
import ResetPage from "./ResetPage";
import { Link } from "react-router-dom";

const ConfirmationMessage = () => {
  const successMessage = (
    <p className='text-green-700'>Successful password reset!</p>
  );
  const description =
    "You can now use your new password to login in to your account";
  const button = (
    <Link
      to='/'
      className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm'>
      Login
    </Link>
  );
  return (
    <div>
      <ResetPage
        successMessage={successMessage}
        description={description}
        button={button}
      />
    </div>
  );
};

export default ConfirmationMessage;
