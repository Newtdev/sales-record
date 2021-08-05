import supabase from "../supabase/Supabase";

export const signIN = (email, password) => async dispatch => {
  const response = await supabase.auth.signIn({ email, password });
  dispatch({ type: "SIGN_IN", payload: response });
};

export const isSignedIN = () => dispatch => {
  const response = supabase.auth.onAuthStateChange((event, session) => {});
  dispatch({ type: "SIGNED_IN", payload: response });
};

// export const user = () => dispatch => {
//   const data = supabase.auth.user();
//   dispatch({ type: "USER_DETAILS", payload: data });
// };
