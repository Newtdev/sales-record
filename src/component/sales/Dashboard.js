import React from "react";
import { connect } from "react-redux";
import supabase from "../../supabase/Supabase";
import { signIN } from "../../action";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import User from "./User";
import History from "../../History";

const Dashboard = ({ session }) => {
  const [sessions, setSession] = useState(null);

  useEffect(() => {
    if (!session) {
      History.push("/");
    } else {
      supabase.auth.onAuthStateChange((event, session) => {
        setSession(session.session);
      });
    }
  }, []);

  return (
    <div>
      <DashboardHeader />
      <div className='dashbord-container w-screen h-screen bg-red-500'>
        <div className='dashbord w-full h-full bg-green-200 flex justify-between items-center'>
          <Sidebar />
          <User />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.AuthReducer.signIn, session: state.AuthReducer.signIn };
};

export default connect(mapStateToProps, { signIN })(Dashboard);
