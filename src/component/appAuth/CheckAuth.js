import React, { useState, useEffect } from "react";
import supabase from "../../supabase/Supabase";
import History from "../../History";

const CheckAuth = () => {
  const [Active, setActive] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setActive(session);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const renderChange = () => {
    {
      !Active
        ? History.push("/")
        : History.push(`/dashboard/${Active.user.id}`);
    }
  };
  useEffect(() => {
    renderChange();
  });
  return <div></div>;
};
export default CheckAuth;
