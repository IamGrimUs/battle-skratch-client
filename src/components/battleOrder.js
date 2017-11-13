import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentBattle } from '../actions/battleAction';
import { BASE_URL } from '../constant';

export class BattleOrders extends React.Component {
  componentWillMount() {
    this.props.fetchCurrentBattle();
  }

  render() {
    const currentBattle = this.props.currentBattle;
    return (
      <section className="content-block--100">
        <section className="contest-headline-block intro-text">
          <h2 className="battle-orders-title">battle orders</h2>
          <ul>
            <li>
              get your submission in for the current battle best
              {` ${currentBattle.battleTypeId.duration}`} second open skratch
              going on now
            </li>
            <li>voting ends {currentBattle.endDate}</li>
            <li>
              {` ${currentBattle.beatId.title}`}
              <br />
              produced by
              <span className="beat-provider">
                {` ${currentBattle.beatId.producer}`}
              </span>
            </li>
            <li>
              <a
                href={currentBattle.beatId.url}
                target="_blank"
                className="beat-download-link"
              >
                claim the beat
              </a>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state', state.battleReducer.currentBattle);
  return { currentBattle: state.battleReducer.currentBattle };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentBattle: () => {
      const headers = new Headers();
      const req = new Request(`${BASE_URL}api/battle/currentBattle`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchCurrentBattle(data));
        })
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleOrders);
