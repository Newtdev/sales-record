// import { Signin } from "../action";

const INITAL_STATE = {
  signIN: null,
  userDetails: null
};

const AuthReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, signIn: action.payload };

    default:
      return state;
  }
};

export default AuthReducer;
