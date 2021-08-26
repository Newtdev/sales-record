import React from "react";
import google from "../../assets/google.svg";
import { connect } from "react-redux";
import { googleAuth } from "../../action";

class GoogleAuth extends React.Component {
  getAuth = () => {
    this.props.googleAuth();
  };

  render() {
    return (
      <button
        className='py-2 w-4/5 border border-red-600 rounded-md shadow-lg text-red-600 text-sm flex items-center justify-evenly font-bold'
        onClick={this.getAuth}>
        <img src={google} alt='google logo' className='h-6' />
        Sign In With Google
      </button>
    );
  }
}

export default connect(null, { googleAuth })(GoogleAuth);
