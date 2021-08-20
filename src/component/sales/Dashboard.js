import React from "react";
import { connect } from "react-redux";
import { signIN } from "../../action";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import hamburger from "../../assets/hamburger.svg";
import User from "./User";
import History from "../../History";

class Dashboard extends React.Component {
  state = { clicked: false };

  render() {
    if (!this.props.session) {
      History.push("/");
    }
    return (
      <div className='dashboard-container w-screen h-screen bg-gray-200'>
        <div>
          <img
            src={hamburger}
            alt='menu'
            className='mx-auto h-10 w-auto cursor-pointer absolute top-1 left-6'
            onClick={() => {
              this.setState({ clicked: true });
            }}
          />
        </div>
        <div>
          <DashboardHeader />
          <div className='w-full h-full flex justify-evenly items-center'>
            <div
              className={`${!this.state.clicked ? "active" : "slide"}  h-screen
              w-72
              bg-red-200`}>
              <Sidebar />
            </div>
            <User id={this.props.location.pathname} />
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
