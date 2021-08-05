// import { Signin } from "../action";

const INITAL_STATE = {
  signIN: null,
  isSignedIN: false,
  userDetails: null
};

const AuthReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, signIn: action.payload };
    case "SIGNED_IN":
      return { ...state, isSignedIN: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
