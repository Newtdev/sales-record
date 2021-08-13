import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { resetPassword } from "../../action";
import ResetPage from "./ResetPage";

const PasswordReset = props => {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const input = () => {
    return (
      <React.Fragment>
        <label
          className='block text-gray-600 text-sm font-bold mb-2 text-left'
          htmlFor='email'>
          Email
        </label>
        <input
          className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id='email'
          type='email'
          placeholder='Your Email Address'
          onChange={onChange}
          value={value}
        />
        <p className='text-red-500 text-xs italic py-1'>{error}</p>
      </React.Fragment>
    );
  };
  const Links = (
    <Link
      className='inline-block font-bold text-sm text-blue-500 hover:text-blue-800'
      to='/SignUp'>
      <span className='font-light text-sm sm:text-md text-gray-800 mr-2'>
        Don't have an account?
      </span>
      Sign up
    </Link>
  );

  const description =
    "Enter the email address associated with your account and we'll send you a link to reset your password.";

  const button = (
    <button
      onClick={() => {
        if (!value) {
          setError("Email must be provided");
        } else {
          props.resetPassword(value);
          setSuccess("Password reset link sent to your email.");
        }
      }}
      type='button'
      className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm'>
      Continue
    </button>
  );
  const successMessage = () => {
    if (success) {
      return (
        <div className=' max-w-xs mx-auto px-8 py-4 bg-white rounded-sm'>
          <h4 className='text-green-600 text-sm text-center'>{success}</h4>
        </div>
      );
    }
  };

  return (
    <div>
      <ResetPage
        description={description}
        input={input()}
        button={button}
        Links={Links}
        message={successMessage()}
      />
    </div>
  );
};

export default connect(null, { resetPassword })(PasswordReset);
