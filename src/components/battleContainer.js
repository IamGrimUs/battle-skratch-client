import React from 'react';
import { connect } from 'react-redux';
import BattleListingHeadline from './battleListingHeadline';
import BattleSubmissionPreview from './battleSubmissionPreview';

export class BattleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBattlePosition: 0
      // battleSubmission: { ...this.props.battleSubmission },
      // battleListing: { ...this.props.battleListing }
    };
  }

  render() {
    console.log('this.props.battleListing', this.props.battleListing);
    const battleListing = this.props.battleListing.map((listing, index) => {
      return (
        <BattleListingHeadline
          key={index}
          index={index}
          battleNumber={listing.battleNumber}
          startDate={listing.startDate}
          endDate={listing.endDate}
          currentBattle={listing.currentBattle}
          duration={listing.duration}
          title={listing.title}
          discription={listing.discription}
        />
      );
    });
    console.log('this.props.battleSubmission', this.props.battleSubmission);
    const battleSubmission = this.props.battleSubmission.map(
      (submission, index) => {
        return (
          <BattleSubmissionPreview
            key={index}
            index={index}
            djName={submission.djName}
            videoImgLink={submission.videoImgLink}
            title={submission.title}
            videoLink={submission.videoLink}
          />
        );
      }
    );
    // const currentBattleSubmission = this.props.battleSubmission;
    console.log('this is battle submission', this.state.battleSubmission);
    return (
      <section className="content-block">
        {battleListing}
        <section className="contest-entry-block">{battleSubmission}</section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    battleListing: state.battleListingReducer.battles,
    battleSubmission: state.battleSubmissionReducer.battleSubmission
  };
};

export default connect(mapStateToProps)(BattleContainer);
