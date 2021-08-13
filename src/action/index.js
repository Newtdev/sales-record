import supabase from "../supabase/Supabase";
import History from "../History";
import Type from "./Type";

const { SIGN_IN, SIGN_OUT, RESET_PASSWORD, NEW_PASSWORD } = Type;

export const signIN = (email, password) => async dispatch => {
  const response = await supabase.auth.signIn({ email, password });
  dispatch({ type: SIGN_IN, payload: response });

  if (!response.error) {
    History.push(`/dashboard/${response.user.id}`);
  }
};

export const signOut = () => async dispatch => {
  await supabase.auth.signOut();
  History.push("/");
  // supabase.auth.onAuthStateChange(() => {});
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
  console.log(error);
  console.log(data);
  dispatch({ type: NEW_PASSWORD, payload: data });
  if (!error) History.push("/password/updated");
};
// https://irndfzxfhqdxkbrliucy.supabase.co
// https://irndfzxfhqdxkbrliucy.supabase.co.supabase.co/auth/v1/callback

// 276591909950-3e9msp5eo8a1dsp73im1t164o9ssv642.apps.googleusercontent.com
// secret: UYcbjiEqhMD-7GAj_0kAsEF9
// https://irndfzxfhqdxkbrliucy.supabase.co.supabase.co/auth/v1/authorize?provider=google

// export const googleAuth = () => async dispatch => {
//   const res = await axios(
//     "https://irndfzxfhqdxkbrliucy.supabase.co.supabase.co/auth/v1/authorize?provider=google"
//   );
//   console.log(res);
// };
