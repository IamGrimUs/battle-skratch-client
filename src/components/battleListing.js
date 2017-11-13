import React from 'react';
import { connect } from 'react-redux';

import { fetchBattles } from '../actions/battleAction';
import { BASE_URL } from '../constant';
import BattleContainer from './battleContainer';

export class BattleListing extends React.Component {
  componentWillMount() {
    this.props.fetchBattles();
  }

  render() {
    // console.log(this.props.battles);
    const { battlesList, battleTypes } = this.props.battles;
    for (let i = 0; i < battlesList.length; i++) {
      battlesList[i].battleTypes = battleTypes[i];
    }

    // console.log('props.battlesList', battlesList);
    // console.log('props.beats', beats);
    // console.log('props.battleTypes', battleTypes);

    const battleListing = battlesList.map((battle, index) => (
      <BattleContainer
        key={index}
        battleIndex={battlesList.length - index}
        battle={battle}
      />
    ));
    return <section className="content-block">{battleListing}</section>;
  }
}

const mapStateToProps = state => {
  return {
    battles: state.battleReducer.battles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBattles: () => {
      const headers = new Headers();
      const req = new Request(`${BASE_URL}api/battle`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchBattles(data));
        })
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleListing);
