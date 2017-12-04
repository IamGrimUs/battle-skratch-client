import React from 'react';
import { connect } from 'react-redux';

import { fetchBattles } from '../actions/battleAction';
import { fetchContenders } from '../actions/contenderAction';
import { BASE_URL } from '../constant';
import BattleContainer from './battleContainer';

export class BattleListing extends React.Component {
  componentWillMount() {
    if (!this.props.contender) {
      return;
    }
    this.props.fetchBattles(this.props.contender);
    this.props.fetchContenders(this.props.contender);
  }

  render() {
    const { battlesList, battleTypes } = this.props.battles;
    for (let i = 0; i < battlesList.length; i++) {
      battlesList[i].battleTypes = battleTypes[i];
    }

    const battleListing = battlesList
      .reverse()
      .map((battle, index) => (
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
    battles: state.battleReducer.battles,
    contenders: state.contenderReducer.contenders,
    contender: state.contenderReducer.contender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBattles: contender => {
      const headers = new Headers({
        Authorization: `Bearer ${contender.authToken}`
      });
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
    },
    fetchContenders: contender => {
      const headers = new Headers({
        Authorization: `Bearer ${contender.authToken}`
      });
      const req = new Request(`${BASE_URL}api/user/`, {
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

export default connect(mapStateToProps, mapDispatchToProps)(BattleListing);
