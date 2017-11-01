import React from 'react';
import { connect } from 'react-redux';

import BattleChampionCard from './battleChampionCard';

export class BattleChampion extends React.Component {
  championCardSetup(champion, index) {
    const headers = new Headers();
    const req = new Request('http://localhost:8080/api/user', {
      method: 'GET',
      mode: 'cors',
      headers: headers
    });
    fetch(req)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    return <BattleChampionCard key={index} index={index} {...champion} />;
  }

  render() {
    const champions = this.props.champion.map(this.championCardSetup);
    return (
      <section>
        <h2 className="current-champion-title">battle champions</h2>
        <section className="content-block-leader-board">{champions}</section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { champion: state.championReducer.champion };
};

export default connect(mapStateToProps)(BattleChampion);
