import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../action";

const SignOut = props => {
  return (
    <button
      className='mt-3 w-full block rounded-md shadow-lg bg-red-600 text-base py-2 px-4 mx-auto text-center font-medium text-white font-bold hover:bg-red-700 focus:outline-none'
      onClick={() => {
        props.signOut();
      }}>
      Sign out
    </button>
  );
};

export default connect(null, { signOut })(SignOut);
