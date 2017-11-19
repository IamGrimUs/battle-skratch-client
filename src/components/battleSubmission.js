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
      contenders: this.props.contenders
    };
    this.loadNext = this.loadNext.bind(this);
    this.loadPrevious = this.loadPrevious.bind(this);
    this.onVoteCountUp = this.onVoteCountUp.bind(this);
    this.onVoteCountDown = this.onVoteCountDown.bind(this);
  }

  loadNext() {
    let currentVideoIndex = this.props.currentVideoIndex;
    const newPosition =
      this.state.videoCount - 1 === this.state.currentVideoPosition
        ? 0
        : ++this.state.currentVideoPosition;
    // const newName =
    //   this.state.djName[currentVideoIndex] ===
    //   this.state.djName[this.state.videoCount]
    //     ? this.state.djName[currentVideoIndex].name
    //     : this.state.djName[currentVideoIndex++].name;
    this.setState({
      ...this.state,
      currentVideoPosition: newPosition
      // djName: newName
    });
  }

  loadPrevious() {
    let newPosition =
      this.state.currentVideoPosition === 0
        ? this.state.videoCount - 1
        : --this.state.currentVideoPosition && --this.state.currentVideoIndex;
    newPosition = newPosition < 0 ? 0 : newPosition;
    this.setState({
      ...this.state,
      currentVideoPosition: newPosition
    });
  }

  componentDidMount() {
    this.props.fetchContenders();
    this.setState({
      videoCount: this.props.videos ? this.props.videos.length : 0
    });
  }

  onVoteCountUp() {
    this.setState({
      ...this.state,
      voteCountUp: ++this.props.videos[this.state.currentVideoPosition]
        .voteCountUp
    });
  }

  onVoteCountDown() {
    this.setState({
      ...this.state,
      voteCountDown: ++this.props.videos[this.state.currentVideoPosition]
        .voteCountDown
    });
  }

  render() {
    const currentVideo = this.props.videos[this.state.currentVideoPosition];
    // console.log('props', this.props.contenders);
    // console.log('state', this.state.contenders);
    // const contender = this.props.contenders[this.state.currentVideoIndex].name;
    // console.log('contender', contender);
    return this.state.videoCount > 0 ? (
      <section>
        <h1 className="page-title">battle submission</h1>
        <div className="content-frame">
          <BattleSubmissionCard
            onLoadNext={this.loadNext}
            battleId={this.battleId}
            onLoadPrevious={this.loadPrevious}
            title={currentVideo.title}
            videoLink={currentVideo.videoLink}
            // djName={this.state.djName}
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
    currentVideoIndex,
    currentVideo: videos[currentVideoIndex],
    contenders: state.contenderReducer.contenders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContenders: () => {
      const headers = new Headers();
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
