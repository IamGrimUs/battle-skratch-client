import React from 'react';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions/videoAction';
import { BASE_URL } from '../constant';

import BattleListingHeadline from './battleListingHeadline';
import BattleSubmissionPreview from './battleSubmissionPreview';
import './battleContainer.css';

export class BattleContainer extends React.Component {
  componentWillMount() {
    if (!this.props.contender) {
      return;
    }
    this.props.fetchVideos(this.props.contender);
  }

  render() {
    const battle = this.props.battle;
    const header = (
      <BattleListingHeadline
        startDate={battle.startDate}
        endDate={battle.endDate}
        battleType={battle.battleTypes}
        battleIndex={this.props.battleIndex}
      />
    );
    const isMatch = vid => {
      const videoIds = this.props.battle.videoIds;
      for (let i = 0; i < videoIds.length; i++) {
        if (vid.id === videoIds[i].id) {
          return true;
        }
      }
      return false;
    };
    const battleSubmissions = this.props.battleSubmissions
      .filter(isMatch)
      .map((submission, index) => {
        return (
          <BattleSubmissionPreview
            key={index}
            battleIndex={this.props.battleIndex}
            battleIds={submission.battleIds}
            viewedBattleId={this.props.battle.id}
            videoId={submission.id}
            userId={submission.userId}
            videoImgLink={submission.videoImgLink}
            videoLink={submission.videoLink}
          />
        );
      });
    return (
      <section className="battle-container">
        <div className="inner-container">
          {header}
          <section className="contest-entry-block">{battleSubmissions}</section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    battleSubmissions: state.videoReducer.videos,
    battle: ownProps.battle,
    contender: state.contenderReducer.contender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: contender => {
      const headers = new Headers({
        Authorization: `Bearer ${contender.authToken}`
      });
      const req = new Request(`${BASE_URL}api/video/`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchVideos(data.video));
        })
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleContainer);
