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
    // const battleContainer = this.props.battle;
    return (
      <section className="content-block">
        <BattleContainer />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  battleListing: state.battleListingReducer.battle,
  battleSubmission: state.battleSubmissionReducer.battleSubmission
});

export default connect(mapStateToProps)(BattleListing);
