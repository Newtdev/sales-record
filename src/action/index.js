import supabase from "../supabase/Supabase";
import History from "../History";
import Type from "./Type";
const {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  RESET_PASSWORD,
  NEW_PASSWORD,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  EDIT_PRODUCT
} = Type;

export const signUp = (username, email, password) => async dispatch => {
  const res = await supabase.auth.signUp({
    username: `${username}`,
    email: `${email}`,
    password: `${password}`,
    redirectTo: "https://waresrecords.vercel.app"
  });
  dispatch({ type: SIGN_UP, payload: res.user });
};

export const signIN = (email, password) => async dispatch => {
  const response = await supabase.auth.signIn({
    email,
    password
  });
  dispatch({ type: SIGN_IN, payload: response });
  if (!response.error) {
    History.push(`/dashboard/${response.user.id}`);
  }
};

export const signOut = () => async dispatch => {
  await supabase.auth.signOut();
  History.push("/");
  dispatch({ type: SIGN_OUT });
};

export const googleAuth = () => async dispatch => {
  await supabase.auth.signIn(
    {
      provider: "google"
    },
    {
      scope: "email"
    }
  );
};

export const resetPassword = email => async dispatch => {
  const res = await supabase.auth.api.resetPasswordForEmail(email, {
    redirectTo: "https://waresrecords.vercel.app/password/new"
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

export const createProduct = (values, userId) => async dispatch => {
  const { productName, suppliedQuantity, costPrice, sellingPrice } = values;

  const res = await supabase.from("sales").insert([
    {
      name: `${productName}`,
      quantity: `${suppliedQuantity}`,
      cost: `${costPrice}`,
      sell: `${sellingPrice}`,
      userid: `${userId}`
    }
  ]);
  dispatch({ type: CREATE_PRODUCT, payload: res.data });
  History.push(`/dashboard/${userId}`);
};

export const fetchProducts = id => async dispatch => {
  const res = await supabase
    .from("sales")
    .select("*")
    // .range(0, 5)s
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

export const fetchProduct = id => async dispatch => {
  const res = await supabase
    .from("sales")
    .select("*")
    .eq("id", id);
  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};
