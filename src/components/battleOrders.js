import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentBattle } from '../actions/battleAction';
import { BASE_URL } from '../constant';

import './battleOrders.css';

export class BattleOrders extends React.Component {
  componentWillMount() {
    if (!this.props.contender) {
      return;
    }
    this.props.fetchCurrentBattle(this.props.contender);
    console.log(this.props);
  }

  render() {
    const currentBattle = this.props.currentBattle;
    // console.log('this is currentBattle: ', currentBattle);
    const description = this.props.currentBattle.battleTypeId.description;
    return (
      <section className="battle-orders">
        <h2>battle orders</h2>
        <section className="instruction-container">
          <ul>
            <li>
              Get your submission in for the current battle<br />
              <span className="black">
                best {`${currentBattle.battleTypeId.duration}`} second open
                skratch routine
              </span>{' '}
              going on now.
            </li>
            <li className="black">
              voting ends {currentBattle.endDate.slice(0, 10)}
            </li>
            <li>
              <span className="black">video length:</span>{' '}
              {`${currentBattle.battleTypeId.duration}`} seconds
            </li>
            <li>
              <span className="black">battle contraints:</span>{' '}
              {description === 'open skratch'
                ? `${description} no limits here. Go nuts!`
                : `${description} how will you rock a limited tool set?`}
            </li>
            <li>
              <span className="black">offical beat:</span>
              {` ${currentBattle.beatId.title}`}
              <br />
              produced by
              <span className="beat-provider">
                {` ${currentBattle.beatId.producer}`}
              </span>
              <br />
              The link below will navagate you to soundcloud.com where you can
              download the beat by clicking the ...more button - just below the
              write a comment input field.
            </li>
            <li>
              <a
                href={currentBattle.beatId.url}
                target="_blank"
                className="beat-download-link"
              >
                Download Battle Beat
              </a>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentBattle: state.battleReducer.currentBattle,
    contender: state.contenderReducer.contender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentBattle: contender => {
      const headers = new Headers({
        Authorization: `Bearer ${contender.authToken}`
      });
      const req = new Request(`${BASE_URL}api/battle/currentBattle`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchCurrentBattle(data.currentBattle));
        })
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleOrders);
