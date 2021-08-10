import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { resetPassword } from "../../action";
import ResetPage from "./ResetPage";

class PasswordReset extends React.Component {
  state = { value: "" };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  input = () => {
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
          onChange={this.onChange}
          value={this.state.value}
        />
      </React.Fragment>
    );
  };
  render() {
    const Links = (
      <Link
        className='inline-block font-bold text-sm text-blue-500 hover:text-blue-800'
        to='/SignUp'>
        <span className='font-light text-sm sm:text-md text-gray-500 mr-2'>
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
          this.props.resetPassword(this.state.value);
        }}
        type='button'
        className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm'>
        Continue
      </button>
    );

    return (
      <div>
        <ResetPage
          description={description}
          input={this.input()}
          button={button}
          Links
        />
        {/* <Modal
          title={title}
          description={description}
          input={this.input()}
          button={button}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(null, { resetPassword })(PasswordReset);
