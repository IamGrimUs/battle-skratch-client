import React from 'react';
import Input from './input';

export default class EnterBattle extends React.Component {
  render() {
    return (
      <section>
        <h1 className="page-title">enter the battle</h1>
        <section className="login-form-container">
          <form ref="commentForm" className="comment-form">
            <Input type="text" placeholder="link to youtube video" required />
            <button type="submit" hidden />
          </form>
        </section>
      </section>
    );
  }
}
