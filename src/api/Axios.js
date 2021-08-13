import axios from "axois";

const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export default axios.create({
  baseURL:
    "https://irndfzxfhqdxkbrliucy.supabase.co/rest/v1/sales?select=userid",
  AnonKey: supabaseAnonKey
});
