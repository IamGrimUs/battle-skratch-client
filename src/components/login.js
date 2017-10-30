import React from 'react';
import Input from './input';
import './login.css';

export default class Login extends React.Component {
  render() {
    return (
      <section>
        <h1 className="page-title">login fella</h1>
        <section className="login-form-container">
          <a href="{DATABSE_URL_VARIABLE_HERE}/auth/google">
            Sign In with Google
          </a>
          <form ref="commentForm" className="comment-form">
            <Input type="text" placeholder="username" required />
            <Input type="password" placeholder="password" required />
            <button type="submit" hidden />
          </form>
        </section>
      </section>
    );
  }
}
