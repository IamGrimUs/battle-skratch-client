import React from 'react';
import { connect } from 'react-redux';

export class BattleOrders extends React.Component {
  render() {
    return (
      <section className="content-block--100">
        <section className="contest-headline-block intro-text">
          <h2 className="battle-orders-title">battle orders</h2>
          <ul>
            <li>
              get your submission in for the current battle best 30 second open
              skratch going on now
            </li>
            <li>voting ends October 29th</li>
            <li>discription of the beat here.</li>
            <li>
              beat provided by
              <span className="beat-provider">easy shanklin</span>
            </li>
            <li>
              <a
                href={this.props.beat[0].link}
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
  return { beat: state.beatReducer.beat };
};

export default connect(mapStateToProps)(BattleOrders);
