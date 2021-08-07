import supabase from "../supabase/Supabase";
import History from "../History";

export const signIN = (email, password) => async (dispatch, getState) => {
  const response = await supabase.auth.signIn({ email, password });
  dispatch({ type: "SIGN_IN", payload: response });

  if (response.error) {
    console.log(response.error);
  } else {
    History.push(`/dashboard/${response.user.id}`);
  }
};
