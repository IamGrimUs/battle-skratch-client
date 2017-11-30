import React from 'react';
import { connect } from 'react-redux';

import { fetchChampions } from '../actions/contenderAction';
import BattleChampionCard from './battleChampionCard';
import { BASE_URL } from '../constant';

import './battleChampion.css';

export class BattleChampion extends React.Component {
  championCardSetup(champion, index, isGrandChampion) {
    return (
      <BattleChampionCard
        key={index}
        index={index}
        isGrandChampion={isGrandChampion}
        {...champion}
      />
    );
  }

  componentWillMount() {
    if (!this.props.contender) {
      return;
    }
    this.props.fetchChampions(this.props.contender);
  }

  render() {
    const { grandChampion, currentChampion } = this.props.champions;
    const cards = [];
    grandChampion && cards.push(this.championCardSetup(grandChampion, 1, true));
    currentChampion &&
      cards.push(this.championCardSetup(currentChampion, 2, false));

    return (
      <section>
        <section className="content-block-leader-board">{cards}</section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    champions: state.contenderReducer.champions,
    contender: state.contenderReducer.contender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChampions: contender => {
      const headers = new Headers({
        Authorization: `Bearer ${contender.authToken}`
      });
      const req = new Request(`${BASE_URL}api/user/champions`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchChampions(data));
        })
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleChampion);
