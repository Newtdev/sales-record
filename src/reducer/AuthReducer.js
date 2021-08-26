import Type from "../action/Type";

const {
  SIGN_IN,
  SIGN_OUT,
  RESET_PASSWORD,
  NEW_PASSWORD,
  SIGN_UP,
  GOOGLE_SIGNIN,
  GOOGLE_SIGNOUT,
  GOOGLE_AUTH
} = Type;

const INITAL_STATE = {
  signIn: null,
  signOut: false,
  reset_password: null,
  signUp: null,
  googleSignIn: null,
  googleAuth: null
};

const AuthReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signIn: action.payload };
    case SIGN_UP:
    case { ...state, signUp: action.payload }:
    case SIGN_OUT:
      return { ...state, signOut: action.payload };
    case GOOGLE_SIGNIN:
      return { ...state, googleSignIn: action.payload };
    case RESET_PASSWORD:
      return { ...state, reset_password: action.payload };
    case GOOGLE_AUTH:
      return { ...state, googleAuth: action.payload };
    case NEW_PASSWORD:
      return { ...state, NEW_PASSWORD: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
