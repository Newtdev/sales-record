import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../action";

const SignOut = props => {
  return (
    <button
      className='mt-3 w-full block rounded-sm shadow-lg bg-gray-200 text-base py-3 px-4 mx-auto text-center text-red-600 font-bold hover:bg-red-600 hover:text-white focus:outline-none'
      onClick={() => {
        props.signOut();
      }}>
      Sign out
    </button>
  );
};

export default connect(null, { signOut })(SignOut);
