import React from 'react';
import Input from './input';
import './login.css';

export default class Clock extends React.Component {
  render() {
    return (
      <section>
        <header className="header">
          <section className="menu-block">
            <div className="logo-block">
              <a href="./index.html">
                <h1>battle skratch</h1>
              </a>
            </div>
            <a className="menu-trigger" href="#main-nav">
              Menu
              <span />
            </a>
          </section>
        </header>
        <h1 className="page-title">login fella</h1>
        <section className="login-form-container">
          <a href="../../../server-battle-skratch/app/auth/google">
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
