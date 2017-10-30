import React from 'react';
import Input from './input';
import './battleCreation.css';

export default class Login extends React.Component {
  render() {
    return (
      <section className="main-content">
        <h1 className="page-title">battle setup</h1>
        <section className="battle-form-container">
          <form ref="adminForm" class="admin-form" onSubmit={this.handleSubmit}>
            <div className="battle-info">
              <h2>battle info</h2>
              <Input type="text" ref="battleName" placeholder="name" />
              <Input
                type="text"
                ref="battleDescription"
                placeholder="description"
              />
              <Input type="text" ref="battleDuration" placeholder="duration " />
              <input type="submit" hidden />
            </div>
            <div className="beat-info">
              <h2>beat info</h2>
              <Input type="text" ref="beatTitle" placeholder="title" />
              <Input type="text" ref="producer" placeholder="producer" />
              <Input type="text" ref="beatURL" placeholder="url" />
            </div>
          </form>
        </section>
      </section>
    );
  }
}
