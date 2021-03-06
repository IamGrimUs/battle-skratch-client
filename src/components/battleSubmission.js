import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import BattleSubmissionCard from './battleSubmissionCard';
import CommentSection from './commentSection';
import { fetchContenders } from '../actions/contenderAction';
import { BASE_URL } from '../constant';

import './battleSubmission.css';

export class BattleSubmission extends React.Component {
  constructor(props) {
    super(props);
    const { currentVideo } = props;
    this.state = {
      currentVideoPosition: props.currentVideoIndex,
      videoCount: props.videos.length,
      voteCountUp: currentVideo.voteCountUp,
      voteCountDown: currentVideo.voteCountDown,
      videos: props.videos
    };
    this.loadNext = this.loadNext.bind(this);
    this.loadPrevious = this.loadPrevious.bind(this);
    this.onVoteCountUp = this.onVoteCountUp.bind(this);
    this.onVoteCountDown = this.onVoteCountDown.bind(this);
    this.updateVoteUpInDb = this.updateVoteUpInDb.bind(this);
    this.updateVoteDownInDb = this.updateVoteDownInDb.bind(this);
  }

  componentDidMount() {
    if (!this.props.contender) {
      return;
    }
    this.props.fetchContenders(this.props.contender);
    this.setState({
      videoCount: this.props.videos ? this.props.videos.length : 0,
      videos: this.props.videos
    });
  }

  loadNext() {
    const newPosition =
      this.state.videoCount - 1 === this.state.currentVideoPosition
        ? 0
        : ++this.state.currentVideoPosition;
    this.setState({
      ...this.state,
      currentVideoPosition: newPosition
    });
  }

  loadPrevious() {
    let newPosition =
      this.state.currentVideoPosition === 0
        ? this.state.videoCount - 1
        : --this.state.currentVideoPosition;
    newPosition = newPosition < 0 ? 0 : newPosition;
    this.setState({
      ...this.state,
      currentVideoPosition: newPosition
    });
  }

  onVoteCountUp() {
    const currentVideoId = this.props.videos[this.state.currentVideoPosition]
      .id;
    this.setState({
      ...this.state,
      voteCountUp: ++this.props.videos[this.state.currentVideoPosition]
        .voteCountUp
    });
    this.updateVoteUpInDb(currentVideoId, this.props.contender);
  }

  updateVoteUpInDb(currentVideoId, contender) {
    const headers = new Headers({
      Authorization: `Bearer ${contender.authToken}`
    });
    const req = new Request(
      `${BASE_URL}api/video/voteCountUp/${currentVideoId}`,
      {
        method: 'PUT',
        mode: 'cors',
        headers: headers
      }
    );
    fetch(req).catch(err => console.log(err));
  }

  updateVoteDownInDb(currentVideoId, contender) {
    const headers = new Headers({
      Authorization: `Bearer ${contender.authToken}`
    });
    const req = new Request(
      `${BASE_URL}api/video/voteCountDown/${currentVideoId}`,
      {
        method: 'PUT',
        mode: 'cors',
        headers: headers
      }
    );
    fetch(req).catch(err => console.log(err));
  }

  onVoteCountDown() {
    const currentVideoId = this.props.videos[this.state.currentVideoPosition]
      .id;
    this.setState({
      ...this.state,
      voteCountDown: --this.props.videos[this.state.currentVideoPosition]
        .voteCountDown
    });
    this.updateVoteDownInDb(currentVideoId, this.props.contender);
  }

  render() {
    const currentVideo = this.props.videos[this.state.currentVideoPosition];
    console.log('currentVideo', currentVideo);
    console.log('contender', this.props.contenders);
    const dj = this.props.contenders.filter(
      dj => dj.id === currentVideo.userId
    );
    console.log('dj', dj);
    const djName = dj[0].name;
    return this.state.videoCount > 0 ? (
      <section className="battle-submission">
        <h2>battle submission</h2>
        <div className="content-frame">
          <BattleSubmissionCard
            onLoadNext={this.loadNext}
            battleId={this.battleId}
            onLoadPrevious={this.loadPrevious}
            title={currentVideo.title}
            videoLink={currentVideo.videoLink}
            djName={djName}
            voteCountUp={currentVideo.voteCountUp}
            voteCountDown={currentVideo.voteCountDown}
            onVoteCountUp={this.onVoteCountUp}
            onVoteCountDown={this.onVoteCountDown}
          />
          <CommentSection
            comments={currentVideo.comments}
            videoId={currentVideo.id}
          />
        </div>
      </section>
    ) : (
      <section>No Content</section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let videos = _.get(state, 'videoReducer.videos', []);
  const battleId = _.get(ownProps, 'match.params.battleId', '');
  const videoId = _.get(ownProps, 'match.params.videoId', '');
  videos = videos.filter(video => video.battleIds.find(b => b.id === battleId));
  const currentVideoIndex = videos.findIndex(video => video.id === videoId);
  return {
    videos,
    battleId,
    videoId,
    currentVideoIndex,
    currentVideo: videos[currentVideoIndex],
    contenders: state.contenderReducer.contenders,
    contender: state.contenderReducer.contender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContenders: contender => {
      const headers = new Headers({
        Authorization: `Bearer ${contender.authToken}`
      });
      const req = new Request(`${BASE_URL}api/user/`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchContenders(data));
        })
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleSubmission);
