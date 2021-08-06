import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIN, isSignedIN } from "../../action";
import Header from "../Header";
import propTypes from "prop-types";
import History from "../../History";
import GoogleAuth from "./GoogleAuth";

class Login extends React.Component {
  state = { email: "", password: "" };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onUserSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.signIN(email, password);

    if (!this.props.signed) {
      return null;
    } else if (this.props.signed.session) {
      History.push(`/dashboard/${this.props.signed.user.id}`);
    }
  };

  render() {
    const errborder = this.props.error ? "border-red-500" : "";
    return (
      <div>
        <div>
          <Header signUp='Sign Up' />
        </div>
        <div className='bg-red-300 h-screen flex justify-center items-center'>
          <div className='image-container'>
            <img src='' alt='' />
          </div>
          <div className='w-full max-w-xs'>
            <form
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
              onSubmit={this.onUserSubmit}>
              <div className='h-24 w-full flex flex-col items-center'>
                <h2 className='text-center text-2xl font-extrabold text-indigo-800 mb-1'>
                  Login
                </h2>
                {/* <div> */}
                <Link
                  className='inline-block font-bold text-sm text-blue-500 hover:text-blue-800'
                  to='/SignUp'>
                  <span className='font-light text-md text-gray-500 mr-2'>
                    Don't have an account?
                  </span>
                  Sign up
                </Link>
                {/* </div> */}
              </div>

              <div className='h-14'>
                <GoogleAuth />
              </div>
              <div className='w-full h-8 flex justify-center items-center '>
                <span class='inline-block h-0.5 w-full bg-gray-300 rounded-3xl'></span>
                <p className='font-bold px-2 text-gray-600'>Or</p>
                <span class='inline-block h-0.5 w-full bg-gray-300 rounded-3xl'></span>
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'>
                  Email
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='email'
                  placeholder='Your Email Address'
                  value={this.state.email}
                  onChange={this.onEmailChange}
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
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                />
                {/* <p className='text-red-500 text-xs italic'>
                  {this.props.error
                    ? "error"
                    : `${this.props.error.error.message}`}
                </p> */}
              </div>
              <div className='flex items-center justify-between'>
                <button
                  name='Sign In'
                  className='bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='submit'>
                  Login
                </button>
                <a
                  className='inline-block align-baseline font-bold text-sm text-indigo-200 hover:text-blue-800'
                  href='/'>
                  {" "}
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.AuthReducer.signIn,
    signed: state.AuthReducer.signIn
  };
};

Login.propTypes = {
  signIN: propTypes.any
};

export default connect(mapStateToProps, { signIN, isSignedIN })(Login);
