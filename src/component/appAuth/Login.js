import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIN } from "../../action";
import Header from "../Header";
import propTypes from "prop-types";

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
    // this.props.signIN(email, password);
    console.log(this.props.signIN(email, password));
  };

  renderError = () => {
    if (this.props.signIn && this.props.error.error) {
      return (
        <p className='text-red-500 text-xs italic'>{`${this.props.error.error.message}`}</p>
      );
    } else {
      return null;
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
                {this.renderError()}
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='submit'>
                  Sign In
                </button>
                <a
                  className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                  href='/'>
                  {" "}
                  Forgot Password?
                </a>
              </div>
              <div>
                <Link
                  className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4'
                  to='/SignUp'>
                  Sign up here?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { error: state.AuthReducer.signIn };
};

Login.propTypes = {
  signIN: propTypes.any
};

export default connect(mapStateToProps, { signIN })(Login);
