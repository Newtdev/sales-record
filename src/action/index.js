import supabase from "../supabase/Supabase";
import History from "../History";
import Type from "./Type";
const {
  SIGN_IN,
  SIGN_OUT,
  RESET_PASSWORD,
  NEW_PASSWORD,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  EDIT_PRODUCT
} = Type;

const Auth = async () => {
  await supabase.auth.onAuthStateChange((event, session) => {});
};

export const signIN = (email, password) => async dispatch => {
  const response = await supabase.auth.signIn({ email, password });
  dispatch({ type: SIGN_IN, payload: response });
  Auth();
  if (!response.error) {
    History.push(`/dashboard/${response.user.id}`);
  }
};

export const signOut = () => async dispatch => {
  await supabase.auth.signOut();
  History.push("/");
  dispatch({ type: SIGN_OUT });
  Auth();
};

export const resetPassword = email => async dispatch => {
  const res = await supabase.auth.api.resetPasswordForEmail(email, {
    redirectTo: "/password/new"
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
  History.push(`/dashboard/${getState().AuthReducer.signIn.user.id}`);
};

export const fetchProducts = id => async dispatch => {
  const res = await supabase
    .from("sales")
    .select("*")
    .range(0, 5)
    .eq("userid", `${id}`);
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const deleteProduct = id => async (dispatch, getState) => {
  await supabase
    .from("sales")
    .delete()
    .eq("id", id);
  dispatch({ type: DELETE_PRODUCT, payload: id });
};

export const editProduct = (values, id) => async dispatch => {
  const { productName, suppliedQuantity, costPrice, sellingPrice } = values;

  const res = await supabase
    .from("sales")
    .update({
      name: `${productName}`,
      quantity: `${suppliedQuantity}`,
      cost: `${costPrice}`,
      sell: `${sellingPrice}`
    })
    .eq("id", id);
  dispatch({ type: EDIT_PRODUCT, payload: res.data });
};
