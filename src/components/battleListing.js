import React from 'react';
import { connect } from 'react-redux';
import BattleContainer from './battleContainer';

export class BattleListing extends React.Component {
  // battleContainerSetup(battleListing, index) {
  //   return (
  //     <BattleContainer
  //       key={index}
  //       index={index}
  //       {battleListing}
  //       {...this.props.battleSubmission}
  //     />
  //   );
  // }
  render() {
    const battles = this.props.battleListing;
    const battleContainers = battles.map(battle => (
      <BattleContainer battle={battle} />
    ));

    return <section className="content-block">{battleContainers}</section>;
  }
}

const mapStateToProps = state => ({
  battleListing: state.battleListingReducer.battles,
  battleSubmission: state.battleSubmissionReducer.battleSubmission
});

export default connect(mapStateToProps)(BattleListing);
