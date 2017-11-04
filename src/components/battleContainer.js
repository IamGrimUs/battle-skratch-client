import React from 'react';
import { connect } from 'react-redux';
import BattleListingHeadline from './battleListingHeadline';
import BattleSubmissionPreview from './battleSubmissionPreview';

export class BattleContainer extends React.Component {
  render() {
    const battle = this.props.battle;
    const header = (
      <BattleListingHeadline
        battleNumber={battle.battleNumber}
        startDate={battle.startDate}
        endDate={battle.endDate}
        currentBattle={battle.currentBattle}
        duration={battle.duration}
        title={battle.title}
        discription={battle.discription}
      />
    );
    const battleSubmissions = this.props.battleSubmissions
      .filter(vid => battle.videoIds.includes(vid.id))
      .map((submission, index) => {
        return (
          <BattleSubmissionPreview
            key={index}
            djName={submission.djName}
            videoImgLink={submission.videoImgLink}
            videoLink={submission.videoLink}
          />
        );
      });
    return (
      <section className="content-block">
        {header}
        <section className="contest-entry-block">{battleSubmissions}</section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    battleSubmissions: state.battleSubmissionReducer.battleSubmission
  };
};

export default connect(mapStateToProps)(BattleContainer);
