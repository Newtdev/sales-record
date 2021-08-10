import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../action";

const SignOut = props => {
  return (
    <button
      className='mt-3 w-full block rounded-md border border-gray-300 shadow-lg bg-red-800 text-base py-2 px-4 mx-auto text-center font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'
      onClick={() => {
        props.signOut();
      }}>
      SignOut
    </button>
  );
};

export default connect(null, { signOut })(SignOut);
