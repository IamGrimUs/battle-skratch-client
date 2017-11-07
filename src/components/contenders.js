import React from 'react';
import { connect } from 'react-redux';

import { UserProfileCard } from './userProfileCard';

import './contenders.css';

export class Contenders extends React.Component {
  userProfileCardSetup(contender, index) {
    return <UserProfileCard key={index} {...contender} />;
  }
  render() {
    const contenders = this.props.contender.map(this.userProfileCardSetup);
    return (
      <section>
        <h1 className="page-title">Contenders</h1>
        <div className="background-color-container">
          <section className="all-users-container">{contenders}</section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  contender: state.contenderReducer.contenders
});

export default connect(mapStateToProps)(Contenders);
