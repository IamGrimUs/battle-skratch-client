import React from 'react';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions/videoAction';
import { BASE_URL } from '../constant';

import BattleListingHeadline from './battleListingHeadline';
import BattleSubmissionPreview from './battleSubmissionPreview';

export class BattleContainer extends React.Component {
  componentWillMount() {
    this.props.fetchVideos();
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
            djName={submission.userId}
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

const mapStateToProps = (state, ownProps) => {
  return {
    battleSubmissions: state.videoReducer.videos,
    battle: ownProps.battle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: () => {
      const headers = new Headers();
      const req = new Request(`${BASE_URL}api/video/`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchVideos(data));
        })
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleContainer);
