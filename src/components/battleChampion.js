import React from 'react';
import { connect } from 'react-redux';

import { fetchChampions } from '../actions/championAction';
import BattleChampionCard from './battleChampionCard';
import { BASE_URL } from '../constant';

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
    this.props.fetchChampions();
  }

  render() {
    const { grandChampion, currentChampion } = this.props.champions;
    const cards = [];
    grandChampion && cards.push(this.championCardSetup(grandChampion, 1, true));
    currentChampion &&
      cards.push(this.championCardSetup(currentChampion, 2, false));

    return (
      <section>
        <h2 className="current-champion-title">battle champions</h2>
        <section className="content-block-leader-board">{cards}</section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { champions: state.championReducer.champions };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChampions: () => {
      const headers = new Headers();
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
