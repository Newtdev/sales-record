import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../action";
import Header from "../Header";
import Business from "../../assets/Business.svg";
import ConfirmationModal from "./ConfirmationModal";

const SignUp = props => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const onUserNameChange = e => {
    setUserName(e.target.value);
  };
  const onEmailChange = e => {
    setEmail(e.target.value);
  };
  const onPasswordChange = e => {
    setPassword(e.target.value);
  };
  const confirmPassword = e => {
    setConfirm(e.target.value);
  };

  const renderError = () => {
    return <p className='text-red-500 text-xs italic pt-2'>{`${error}`}</p>;
  };

  const onUserSubmit = e => {
    e.preventDefault();

    if (confirm !== password) {
      this.setState({ error: "Password and confirm password must match." });
    } else if (password.length <= 5) {
      this.setState({ error: "Password must be more than 5 characters." });
    } else {
      console.log(props.signUp(username, email, password));
      setActive("block");
    }
  };

  return (
    <>
      <div className='max-h-screen sm:px-6 lg:px-8 overflow-hidden background'>
        <div>
          <Header></Header>
        </div>
        <div className=' h-screen flex items-center justify-evenly flex-wrap '>
          <div className='w-1/2 h-full hidden sm:block'>
            <img
              src={Business}
              alt='business svg'
              className='mx-auto h-full w-auto'
            />
          </div>
          <div className='w-70 sm:w-80 flex justify-center items-center'>
            <div className='max-w-sm w-full space-y-8 h-1/2 pb-10 py-6 px-4 bg-white shadow-2xl '>
              <div className='h-24 flex flex-col items-center justify-evenly'>
                <h2 className='text-center text-lg font-semibold heading text-gray-500'>
                  Sign up with{" "}
                  <span className='text-3xl font-extrabold text-indigo-800'>
                    WDS
                  </span>
                </h2>
                <div className=' w-full flex justify-center items-center'>
                  <span className='font-light text-sm sm:text-md text-gray-500 mr-2'>
                    Already signed up?
                  </span>
                  <Link
                    className='inline-block font-bold text-sm text-blue-500 hover:text-blue-800'
                    to='/'>
                    Login
                  </Link>
                </div>
              </div>

              <form className=' space-y-6' action='#' onSubmit={onUserSubmit}>
                <input type='hidden' name='remember' value='true' />
                <div className='rounded-md shadow-sm -space-y-px'>
                  <div>
                    <label htmlFor='user-name' className='sr-only'>
                      Username
                    </label>
                    <input
                      onChange={onUserNameChange}
                      id='user-name'
                      name='user-name'
                      type='text'
                      autoComplete='off'
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Full Name'
                    />
                  </div>
                  <div>
                    <label htmlFor='email-address' className='sr-only'>
                      Email address
                    </label>
                    <input
                      onChange={onEmailChange}
                      id='email-address'
                      name='email'
                      type='email'
                      autoComplete='off'
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Email address'
                    />
                  </div>
                  <div>
                    <label htmlFor='password' className='sr-only'>
                      Password
                    </label>
                    <input
                      onChange={onPasswordChange}
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='off'
                      required
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Password'
                    />
                  </div>
                  <div>
                    <label htmlFor='password' className='sr-only'>
                      confirm password
                    </label>
                    <input
                      onChange={confirmPassword}
                      id='confirm-password'
                      name='confirm-password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Confirm password'
                    />
                  </div>
                  {renderError()}
                </div>

                <div>
                  <button
                    type='submit'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                      {/* <!-- Heroicon name: solid/lock-closed --> */}
                      <svg
                        className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'>
                        <path
                          fillRule='evenodd'
                          d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {!active ? null : <ConfirmationModal />}
    </>
  );
};

export default connect(null, { signUp })(SignUp);
