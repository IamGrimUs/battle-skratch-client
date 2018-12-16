import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import { reduxForm, Field, reset } from 'redux-form';
import {
  fetchCurrentContender,
  loginErrorMessage
} from '../actions/contenderAction';
import { BASE_URL } from '../constant';

import './login.css';

export class Login extends React.Component {
  render() {
    if (this.props.contender.userId) {
      return <Redirect to={{ pathname: '/howItWorks' }} />;
    }
    return (
      <section className="login-container">
        <h2>login tabilist</h2>
        <section className="login-form-container">
          <p>
            This site is currently in testing. Logins are invite only. For demo
            viewing please sign in as.
          </p>
          <p className="black">
            user name: you<br />
            password: password
          </p>
          {this.props.errorMessage && (
            <p className="errorMessage">{`${
              this.props.errorMessage
              } Please check your entries and try again.`}</p>
          )}
          <WrappedLoginForm onSubmit={this.props.onSubmit} />
          <p className="submit-text">press enter to submit. please note initial login may take longer than expected. while the server wakes up.</p>
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
        autoFocus
      />
      <Field
        name="password"
        type="password"
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
  return fetch(req).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

const afterSubmit = value => reset('VideoCreationForm');
const WrappedLoginForm = reduxForm({
  form: 'VideoCreationForm',
  onSubmitSuccess: afterSubmit
})(LoginForm);

const mapStateToProps = state => {
  return {
    errorMessage: state.contenderReducer.errorMessage,
    contender: state.contenderReducer.contender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: value => {
      const userName = value.userName;
      const password = value.password;
      captureUserLogin(userName, password)
        .then(data => {
          dispatch(fetchCurrentContender(data));
          return data;
        })
        .catch(err => {
          console.log(JSON.stringify(err));
          let errorMessage = err.message;
          dispatch(loginErrorMessage(errorMessage));
          console.log(errorMessage);
          return Promise.reject();
        })
        .then(response => {
          Cookie.set('jwt', response.authToken);
          Cookie.set('loggedInUserId', response.userId);
          Cookie.set('permission', response.permission);
          return response;
        })
        .catch(err => console.log(err));
      value.userName = '';
      value.password = '';
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
