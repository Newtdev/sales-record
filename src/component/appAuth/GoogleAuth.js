import React from "react";
import google from "../../assets/google.svg";
import { connect } from "react-redux";
import { googleSignIn, googleSignOut } from "../../action";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "982992436894-0usg1d1thqmnkr2dh328tlug54j72esi.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  getAuth = () => {
    this.props.googleSignIn();
  };

  render() {
    return (
      <button
        className='py-2 w-4/5 border border-red-600 rounded-md shadow-lg text-red-600 text-sm flex items-center justify-evenly font-bold'
        onClick={this.getAuth}>
        <img src={google} alt='google logo' className='h-6' />
        Sign In With Google
      </button>
    );
  }
}

export default connect(null, { googleSignIn, googleSignOut })(GoogleAuth);
