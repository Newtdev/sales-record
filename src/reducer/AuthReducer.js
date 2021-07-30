// import { Signin } from "../action";

const INITAL_STATE = {
  signIN: null,
  signUP: null
};

const AuthReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, signIn: action.payload };
    case "SIGN_UP":
      return { ...state, signUp: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
