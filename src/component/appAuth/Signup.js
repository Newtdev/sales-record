import React from "react";
import Header from "../Header";
import History from "../../History";
import supabase from "../../supabase/Supabase";
import Business from "../../assets/Business.svg";

class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    error: ""
    // supabaseErr: null
  };

  signUpAuth = async (username, password, email) => {
    try {
      const { error } = await supabase.auth.signUp({
        username,
        email,
        password
      });
      if (error) {
        throw error;
        // this.setState({ supabaseErr: error });
      }
    } catch (error) {
      throw error;
    }
  };

  validatePassword = () => {
    if (this.state.password.length <= 5) {
      return <div>error</div>;
    }
  };
  onUserNameChange = e => {
    this.setState({ username: e.target.value });
  };
  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  confirmPassword = e => {
    this.setState({ confirm: e.target.value });
  };

  onChecked = () => {
    return <div></div>;
  };
  renderError = () => {
    return (
      <p className='text-red-500 text-xs italic pt-2'>{`${this.state.error}`}</p>
    );
  };

  onUserSubmit = e => {
    e.preventDefault();
    const { username, email, password, confirm } = this.state;

    if (confirm !== password) {
      this.setState({ error: "Password and confirm password must match." });
    } else if (password.length <= 5) {
      this.setState({ error: "Password must be more than 5 characters." });
    } else {
      this.signUpAuth(username, email, password);
      History.push("/confirm");
    }
  };
  render() {
    return (
      <>
        <div className='max-h-screen sm:px-6 lg:px-8 overflow-hidden background'>
          <div>
            <Header>Log in</Header>
          </div>
          <div className=' h-screen flex items-center justify-evenly flex-wrap '>
            <div className='w-1/2 h-full hidden sm:block'>
              <img
                src={Business}
                alt='business svg'
                className='mx-auto h-full w-auto'
              />
            </div>
            <div className='w-72 sm:w-3/5 sm:w-1/2 flex justify-center items-center'>
              <div className='max-w-sm w-full space-y-8 h-1/2 py-10 px-4 bg-white shadow-2xl '>
                <form
                  className='mt-8 space-y-6'
                  action='#'
                  onSubmit={this.onUserSubmit}>
                  <h2 className='text-center text-lg font-extrabold text-gray-900'>
                    Sign Up with{" "}
                    <span className='text-3xl font-extrabold text-indigo-800'>
                      WDS
                    </span>
                  </h2>

                  <input type='hidden' name='remember' value='true' />
                  <div className='rounded-md shadow-sm -space-y-px'>
                    <div>
                      <label htmlFor='user-name' className='sr-only'>
                        Username
                      </label>
                      <input
                        onChange={this.onUserNameChange}
                        id='user-name'
                        name='user-name'
                        type='text'
                        autoComplete='off'
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Full Name'
                      />
                    </div>
                    <div>
                      <label htmlFor='email-address' className='sr-only'>
                        Email address
                      </label>
                      <input
                        onChange={this.onEmailChange}
                        id='email-address'
                        name='email'
                        type='email'
                        autoComplete='off'
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Email address'
                      />
                    </div>
                    <div>
                      <label htmlFor='password' className='sr-only'>
                        Password
                      </label>
                      <input
                        onChange={this.onPasswordChange}
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='off'
                        required
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Password'
                      />
                    </div>
                    <div>
                      <label htmlFor='password' className='sr-only'>
                        confirm password
                      </label>
                      <input
                        onChange={this.confirmPassword}
                        id='confirm-password'
                        name='confirm-password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Confirm password'
                      />
                    </div>
                    {this.renderError()}
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-2 block text-sm text-gray-900'>
                        I accept the terms and conditions.
                      </label>
                    </div>

                    {/* <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Forgot your password?
                </a>
              </div> */}
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                        {/* <!-- Heroicon name: solid/lock-closed --> */}
                        <svg
                          className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'>
                          <path
                            fillRule='evenodd'
                            d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </span>
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
