import React from 'react';
import { connect } from 'react-redux';

import BattleSubmissionLink from './battleSubmissionLink';
import BattleSubmissionImgLink from './battleSubmissionImgLink';

export class BattleSubmissionPreview extends React.Component {
  render() {
    console.log('battle submission preview');
    const dj = this.props.contenders.filter(dj => dj.id === this.props.userId);
    const djName = dj[0].name;
    return (
      <section className="contest-entry">
        <BattleSubmissionImgLink
          videoImgLink={this.props.videoImgLink}
          alt={this.props.title}
        />
        <div className="contest-entry-description-block">
          <p>{djName}</p>
        </div>
        <BattleSubmissionLink
          battleId={this.props.viewedBattleId}
          videoId={this.props.videoId}
        />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    contenders: state.contenderReducer.contenders
  };
};

export default connect(mapStateToProps)(BattleSubmissionPreview);
