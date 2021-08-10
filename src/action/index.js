import supabase from "../supabase/Supabase";
import History from "../History";
import Type from "./Type";

const { SIGN_IN, SIGN_OUT, RESET_PASSWORD, NEW_PASSWORD } = Type;

export const signIN = (email, password) => async dispatch => {
  const response = await supabase.auth.signIn({ email, password });
  dispatch({ type: SIGN_IN, payload: response });

  supabase.auth.onAuthStateChange((event, session) => {
    History.push(`/dashboard/${response.user.id}`);
  });
};

export const signOut = () => async dispatch => {
  await supabase.auth.signOut();

  supabase.auth.onAuthStateChange(() => {
    History.push("/");
  });
  dispatch({ type: SIGN_OUT });
};

export const resetPassword = email => dispatch => {
  const { data, error } = supabase.auth.api.resetPasswordForEmail(email);
  console.log(data);
  console.log(error);
  dispatch({ type: RESET_PASSWORD, payload: data });
};

export const updatePassword = new_password => async dispatch => {
  // const { error, data } = await supabase.auth.api.updateUser(access_token, {
  //   password: new_password
  // });
  // dispatch({ type: NEW_PASSWORD, payload: data });
};
