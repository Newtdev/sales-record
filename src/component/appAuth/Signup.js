import React from 'react';
import { supabase } from '../server/SupaBase';

class SignUp extends React.Component {
    state = { username: "", email: "", password: "",error: null };

    onSignup = async (username, email, password) => {
        try {
            const { error } = await supabase.auth.signUp({ username, email, password });
            if (error) {
                throw error;
            }
        } catch (error) {
            alert(error.error_description || error.message);
        }
    };

    onUserNameChange = (e) => {
        this.setState({ username: e.target.value });
    };
    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        console.log(this.state);
        this.onSignup(username, email, password);
    };
    render() {
        return (
            <div>
                <h1 className="header"> Sign Up</h1>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>User Name</label>
                        <input type="text" value={this.state.username} placeholder="User Name" onChange={this.onUserNameChange} />
                    </div>
                    <div className="field">
                        <label>Email Address</label>
                        <input type="email" value={this.state.email} placeholder="email" onChange={this.onEmailChange} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" value={this.state.password} placeholder="Your Password" onChange={this.onPasswordChange} />
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" tabIndex="0" />
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <button className="ui button primary" type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default SignUp;