import React from 'react';
import { connect } from 'react-redux';
import BattleContainer from './battleContainer';

export class BattleListing extends React.Component {
  render() {
    const battles = this.props.battleListing;
    const battleContainers = battles.map((battle, index) => (
      <BattleContainer key={index} battle={battle} />
    ));

    return <section className="content-block">{battleContainers}</section>;
  }
}

const mapStateToProps = state => ({
  battleListing: state.battleListingReducer.battles
});

export default connect(mapStateToProps)(BattleListing);
