import React from 'react';
import { connect } from 'react-redux';
import BattleChampion from './battleChampion';
import { fetchContenders } from '../actions/contenderAction.js';
import UserProfileCard from './userProfileCard';

import './contenders.css';

export class Contenders extends React.Component {
  contenderCardSetup(contender, index) {
    return <UserProfileCard key={index} index={index} {...contender} />;
  }

  componentWillMount() {
    if (!this.props.contender) {
      return;
    }
    this.props.fetchContenders(this.props.contender);
  }

  render() {
    const contenders = this.props.contenders.map(this.contenderCardSetup);
    // const contenders = this.props.contenders;
    // const cards = [];
    // contenders && cards.push(this.contenderCardSetup(contenders, 1));
    // console.log(cards);
    return (
      <section className="contenders">
        <h2>battle champions</h2>
        <div className="contenders-container">
          <BattleChampion />
          <h2>Contenders</h2>
          <section className="all-users-container">{contenders}</section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    contenders: state.contenderReducer.contenders,
    contender: state.contenderReducer.contender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContenders: contender => {
      const headers = new Headers({
        Authorization: `Bearer ${contender.authToken}`
      });
      const req = new Request('http://localhost:8080/api/user/', {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchContenders(data));
        })
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contenders);
