import supabase from "../supabase/Supabase";
import History from "../History";
import Type from "./Type";
import CheckAuth from "../component/appAuth/CheckAuth";
// import CheckAuth from "../component/appAuth/CheckAuth";
const {
  SIGN_IN,
  SIGN_OUT,
  RESET_PASSWORD,
  NEW_PASSWORD,
  CREATE_PRODUCT,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  EDIT_PRODUCT
} = Type;

export const signIN = (email, password) => async dispatch => {
  const response = await supabase.auth.signIn({ email, password });
  dispatch({ type: SIGN_IN, payload: response });

  // CheckAuth();
  // if (!response.error) {
  //   History.push(`/dashboard/${response.user.id}`);
  // }
};

export const signOut = () => async dispatch => {
  await supabase.auth.signOut();
  History.push("/");
  dispatch({ type: SIGN_OUT });
};

export const resetPassword = email => async dispatch => {
  const res = await supabase.auth.api.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/password/new"
  });
  dispatch({ type: RESET_PASSWORD, payload: res });
};

export const updatePassword = (
  access_token,
  new_password
) => async dispatch => {
  const { error, data } = await supabase.auth.api.updateUser(access_token, {
    password: new_password
  });

  dispatch({ type: NEW_PASSWORD, payload: data });
  if (!error) History.push("/password/updated");
};

// {productName: "Wine", suppliedQuantity: "20", costPrice: "2000", sellingPrice: "4000"}

export const createProduct = values => async (dispatch, getState) => {
  const { productName, suppliedQuantity, costPrice, sellingPrice } = values;

  const res = await supabase.from("sales").insert([
    {
      name: `${productName}`,
      quantity: `${suppliedQuantity}`,
      cost: `${costPrice}`,
      sell: `${sellingPrice}`,
      userid: getState().AuthReducer.signIn.user.id
    }
  ]);
  dispatch({ type: CREATE_PRODUCT, payload: res.data });
};

export const fetchProducts = id => async dispatch => {
  const res = await supabase
    .from("sales")
    .select("*")
    .range(0, 5)
    .eq("userid", `${id}`);
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};
