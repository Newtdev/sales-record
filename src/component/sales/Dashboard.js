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
      <div className='dashboard-container w-screen h-screen bg-blue-900'>
        <div className='dashbord w-full h-full flex justify-evenly items-center'>
          <Sidebar />
          <User />
        </div>
      </div>
    </div>
  );
};

{
  /* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg> */
}

const mapStateToProps = state => {
  return { user: state.AuthReducer.signIn, session: state.AuthReducer.signIn };
};

export default connect(mapStateToProps, { signIN })(Dashboard);
