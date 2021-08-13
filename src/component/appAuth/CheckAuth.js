import React from "react";
import supabase from "../../supabase/Supabase";

const CheckAuth = ActiveSession => {
  // supabase.auth.onAuthStateChange((event, session) => {
  //   console.log(session);
  //   if (ActiveSession) {
  //     History.push(`/dashboard/${ActiveSession.user.id}`);
  //   } else {
  //     History.push("/");
  //   }
  // });
  // const tokenData =
  //   "#access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjI4ODE0MTcxLCJzdWIiOiJhMjljNGM2My1hNDE2LTRjODgtOWMzMi04NzA4NDBmYWUzMjUiLCJlbWFpbCI6ImVqZW1iaXRob21hczYxQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.DNwZKKmCw7cWZcBUQGk9NrTWUwVpXhCfpo-laEuOOmI&expires_in=3600&refresh_token=-c6rCSp3EcN0STimF-PpUA&token_type=bearer&type=recovery";
  // const checkToken = token => {
  //   const res = token.split("&");
  //   // return res[0];
  //   return res[4];
  // };
  // console.log(checkToken(tokenData));
  return <div></div>;
};
export default CheckAuth;
