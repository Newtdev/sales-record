import React, { useState } from "react";
import ResetPage from "./ResetPage";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setError] = useState("");

  const Heading = "Reset Password";

  const submit = () => {
    if (confirmPassword !== password) {
      setError("Password and confirm password must match.");
    } else if (password.length <= 5) {
      setError("Password must be more than 5 characters.");
    } else {
      console.log(password, confirmPassword);
    }
  };

  const Input = () => {
    return (
      <React.Fragment>
        <div>
          <label
            htmlFor='password'
            className='font-bold inline-block pb-2 text-gray-700 text-sm'>
            New Password
          </label>
          <input
            className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline active:border-blue-500`}
            id='password'
            type='password'
            placeholder='******************'
            // value={this.state.password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor='password'
            className='font-bold inline-block pb-2 text-gray-700 text-sm'>
            Confirm New Password
          </label>
          <input
            className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline active:border-blue-500`}
            id='confirm-password'
            type='password'
            placeholder='******************'
            // value={this.state.password}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <p className='text-red-500 text-xs italic'>{`${errors}`}</p>
      </React.Fragment>
    );
  };
  const button = (
    <button
      onClick={submit}
      type='button'
      className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm'>
      Reset my password
    </button>
  );
  return (
    <div>
      <ResetPage heading={Heading} input={Input()} button={button} />
    </div>
  );
};

export default NewPassword;
