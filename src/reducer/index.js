import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProductReducer from "./ProductReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  AuthReducer,
  ProductReducer,
  form: formReducer
});
