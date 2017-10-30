import React from 'react';
import Input from './input';
import './userProfileEdit.css';

export default class UserProfileEdit extends React.Component {
  render() {
    return (
      <section>
        <h1 className="page-title">profile edit</h1>
        <div className="background-color-container">
          <section className="user-profile-container">
            <div className="profile-avatar-container">
              <figure>
                <img src="./img/generic_avatar_300.png" alt="{djName}" />
              </figure>
            </div>
            <div className="profile-info">
              <form className="profile-form">
                <h2>dj name</h2>
                <Input type="text" ref="djName" placeholder="dj name" />
                <h2>self promotion</h2>
                <Input type="text" ref="djName" placeholder="facebook" />
                <Input type="text" ref="djName" placeholder="youtube" />
                <Input type="text" ref="djName" placeholder="twitter" />
                <Input type="text" ref="djName" placeholder="instagram" />
              </form>
            </div>
          </section>
        </div>
      </section>
    );
  }
}
