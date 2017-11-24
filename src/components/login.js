import React from 'react';
import './login.css';

export default class Login extends React.Component {
  render() {
    return (
      <section>
        <h1 className="page-title">login fella</h1>
        <section className="login-form-container">
          <div className="google-login">
            <a href="{BASE_URL}/auth/google">
              <div className="google-login-button-container">
                <span>Sign In with Google</span>
              </div>
            </a>
          </div>
          {/* <form ref="commentForm" className="comment-form">
            <Input type="text" placeholder="username" required />
            <Input type="password" placeholder="password" required />
            <button type="submit" hidden />
          </form> */}
        </section>
      </section>
    );
  }
}
