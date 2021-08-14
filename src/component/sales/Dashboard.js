import React from "react";
import { connect } from "react-redux";
import { signIN } from "../../action";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import User from "./User";
import History from "../../History";

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.session) {
      History.push("/");
    }
  }

  // console.log(session.session);
  render() {
    return (
      <div>
        <div className='dashboard-container w-screen h-screen bg-gray-200'>
          <DashboardHeader />
          <div className='dashbord w-full h-full flex justify-evenly items-center'>
            <Sidebar />
            <User />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.AuthReducer.signIn, session: state.AuthReducer.signIn };
};

export default connect(mapStateToProps, { signIN })(Dashboard);
