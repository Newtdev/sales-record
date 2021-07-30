import supabase from "../supabase/Supabase";
import History from "../History";

export const signIN = (email, password) => async dispatch => {
  const response = await supabase.auth.signIn({ email, password });
  console.log(response);
  dispatch({ type: "SIGN_IN", payload: response });
};

export const signUp = (userName, email, password) => async dispatch => {
  const response = await supabase.auth.signUp({ userName, email, password });
  // console.log(response.data);
  dispatch({ type: "SIGN_UP", payload: response.data });
  // History.push("/modal");
};

// try {
//   const { error } = await supabase.auth.signIn({ email, password });

//   if (error) throw error;
// } catch (error) {
//   this.setState({ error });
// }
