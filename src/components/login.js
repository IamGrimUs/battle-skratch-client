import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookies';
import { reduxForm, Field, reset } from 'redux-form';

import { fetchCurrentContender } from '../actions/contenderAction';
import { BASE_URL } from '../constant';

import './login.css';

export class Login extends React.Component {
  render() {
    return (
      <section className="login-container">
        <h2>login fella</h2>
        <section className="login-form-container">
          <p>
            This site is currently in testing. Logins are invite only during the
            duration. For demo viewing please sign in as
          </p>
          <p class="black">
            user name: you<br />
            password: 123
          </p>
          {/* <div className="google-login">
            <a href="{BASE_URL}/auth/google">
              <div className="google-login-button-container">
                <span>Sign In with Google</span>
              </div>
            </a>
          </div> */}
          <WrappedLoginForm onSubmit={this.props.onSubmit} />
        </section>
      </section>
    );
  }
}
const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Field
        name="userName"
        type="text"
        component="input"
        placeholder="user name"
        required
      />
      <Field
        name="password"
        type="text"
        component="input"
        placeholder="password"
        required
      />
      <input type="submit" disabled={pristine || submitting} hidden />
    </form>
  );
};

const captureUserLogin = (userName, password) => {
  const data = JSON.stringify({ userName, password });
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const req = new Request(`${BASE_URL}auth/login/`, {
    method: 'POST',
    mode: 'cors',
    body: data,
    headers: headers
  });
  fetch(req)
    .then(response => {
      console.log(response);
      console.log(response.authToken);
      if (response.ok) {
        Cookies.set('jwt', response.authToken);
        Cookies.set('loggedInUserId', response.userId);
        Cookies.set('permission', response.permission);
        console.log('all good things...?');
      }
    })
    .catch(err => console.log(err));
};

const afterSubmit = value => reset('VideoCreationForm');
const WrappedLoginForm = reduxForm({
  form: 'VideoCreationForm',
  onSubmitSuccess: afterSubmit
})(LoginForm);

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: value => {
      const userName = value.userName;
      const password = value.password;
      dispatch(fetchCurrentContender(userName, password));
      captureUserLogin(userName, password);
      value.userName = '';
      value.password = '';
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
