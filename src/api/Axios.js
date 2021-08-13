import axios from "axois";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export default axios.create({
  //   baseURL: "http://localhost:8080",
  AnonKey: supabaseAnonKey,
  AppURL: supabaseUrl
});
