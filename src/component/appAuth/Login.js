import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIN } from "../../action";
import Header from "../Header";
import propTypes from "prop-types";
import GoogleAuth from "./GoogleAuth";
import business from "../../assets/Business.svg";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const resQuest = async () => {
    // let { data } = await supabase.from("sales").select("*");
    // console.log(data);
    // "https://irndfzxfhqdxkbrliucy.supabase.co/rest/v1/sales?select=*",
    // {
    //   apikey:
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjI2Nzk1ODM3LCJleHAiOjE5NDIzNzE4Mzd9.GB9__kF7QZimt897SCrkzxfIBDJbqMwfQrAKgvm3D_k",
    //   Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjI2Nzk1ODM3LCJleHAiOjE5NDIzNzE4Mzd9.GB9__kF7QZimt897SCrkzxfIBDJbqMwfQrAKgvm3D_k`
    // }
  };
  useEffect(() => {
    resQuest();
  });
  // useEffect(() => {
  //   if (props.error) {
  //     setError(props.error.error.message);
  //     // return <p className='text-red-500 text-xs italic'>{this.state.error}</p>;
  //   } else {
  //     return null;
  //   }
  // }, [prp]);

  const onUserSubmit = e => {
    e.preventDefault();
    if (!email) {
      setError("Email addresss must be provided");
    } else if (!password) {
      setError("Password must be provided");
    } else {
      // supabase.auth.onAuthStateChange((event, session) => {
      props.signIN(email, password);
      // });
    }
  };

  const errborder = error ? "border-red-500" : "";
  return (
    <div className='h-screen bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 overflow-hidden'>
      <div>
        <Header />
      </div>
      <div className='h-full flex justify-evenly items-center'>
        <div className='w-1/2 hidden white sm:block'>
          <img
            src={business}
            alt='calculator'
            className='mx-auto h-full w-auto'
          />
        </div>
        <div className='w-full sm:w-1/2 flex justify-center items-center mx-4 mt-8 sm:mt-0'>
          <div className='w-full max-w-xs'>
            <form
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
              onSubmit={onUserSubmit}>
              <div className='h-24 w-full flex flex-col items-center'>
                <h2 className='text-center text-2xl font-extrabold text-indigo-800 mb-1'>
                  WDS
                </h2>
                <Link
                  className='inline-block font-bold text-sm text-blue-500 hover:text-blue-800'
                  to='/SignUp'>
                  <span className='font-light text-sm sm:text-md text-gray-500 mr-2'>
                    Don't have an account?
                  </span>
                  Sign up
                </Link>
              </div>

              <div className='h-14'>
                <GoogleAuth />
              </div>
              <div className='w-full h-8 flex justify-center items-center '>
                <span className='inline-block h-0.5 w-full bg-gray-300 rounded-3xl'></span>
                <p className='font-bold px-2 text-gray-600'>Or</p>
                <span className='inline-block h-0.5 w-full bg-gray-300 rounded-3xl'></span>
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'>
                  Email
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id='email'
                  type='email'
                  placeholder='Your Email Address'
                  value={email}
                  onChange={onEmailChange}
                />
              </div>
              <div className='mb-6'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='password'>
                  Password
                </label>

                <input
                  className={`shadow appearance-none border ${errborder} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline active:border-blue-500`}
                  id='password'
                  type='password'
                  placeholder='******************'
                  value={password}
                  onChange={onPasswordChange}
                />
                <p className='text-red-500 text-xs italic'>{error}</p>
              </div>
              <div className='flex items-center sm:justify-between'>
                <button
                  name='Sign In'
                  className='bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4 sm:mr-0'
                  type='submit'>
                  Login
                  {/* <div class=' flex justify-center items-center'>
                    <div class='animate-spin rounded-full h-2 w-3 border-t-2 border-b-2 border-purple-500'></div>
                  </div> */}
                </button>
                <Link
                  to='/password/reset'
                  className='inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800'
                  href='/'>
                  {" "}
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.AuthReducer.signIn
    // signed: state.AuthReducer.signIn
  };
};

Login.propTypes = {
  signIN: propTypes.any
};

export default connect(mapStateToProps, { signIN })(Login);
