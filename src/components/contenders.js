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
    this.props.fetchContenders();
  }

  render() {
    const contenders = this.props.contenders.map(this.contenderCardSetup);
    // const contenders = this.props.contenders;
    // const cards = [];
    // contenders && cards.push(this.contenderCardSetup(contenders, 1));
    // console.log(cards);
    return (
      <section>
        <BattleChampion />
        <h1 className="page-title">Contenders</h1>
        <div className="background-color-container">
          <section className="all-users-container">{contenders}</section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { contenders: state.contenderReducer.contenders };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContenders: () => {
      const headers = new Headers();
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
