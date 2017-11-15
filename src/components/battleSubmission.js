import React from 'react';
import { connect } from 'react-redux';

import BattleSubmissionCard from './battleSubmissionCard';
import CommentSection from './commentSection';
import './battleSubmission.css';

export class BattleSubmission extends React.Component {
  constructor(props) {
    const currentVideo = 'this.props.battleSubmission';
    super(props);
    this.state = {
      currentVideoPosition: 0,
      videoCount: 0,
      voteUp: Number(currentVideo.voteUp),
      voteDown: Number(currentVideo.voteDown)
    };
    this.loadNext = this.loadNext.bind(this);
    this.loadPrevious = this.loadPrevious.bind(this);
    this.onVoteUp = this.onVoteUp.bind(this);
    this.onVoteDown = this.onVoteDown.bind(this);
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

  componentDidMount() {
    this.setState({
      videoCount: this.props.battleSubmission
        ? this.props.battleSubmission.length
        : 0
    });
  }

  onVoteUp() {
    this.setState({
      ...this.state,
      voteUp: ++this.props.battleSubmission[this.state.currentVideoPosition]
        .voteUp
    });
  }

  onVoteDown() {
    this.setState({
      ...this.state,
      voteUp: ++this.props.battleSubmission[this.state.currentVideoPosition]
        .voteDown
    });
  }

  render() {
    const currentVideo = this.props.battleSubmission[
      this.state.currentVideoPosition
    ];
    // console.log('props', this.props.ownProps);
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
            djName={currentVideo.djName}
            voteUp={currentVideo.voteUp}
            voteDown={currentVideo.voteDown}
            onVoteUp={this.onVoteUp}
            onVoteDown={this.onVoteDown}
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

const mapStateToProps = state => {
  return {
    battleSubmission: () => {
      // 1. user videoreducer over battlesubissionreducer, they're basically the same thing
      // 2. consider adding battle id to video so we don't have to do kung fu to find it
      // 3. filter videos of video reducer so next/prev button don't cycle through all vids of all battles
      // just the associated one
      // 4. might have to massage the logic with the current vid position
      //const currentBattleId = 'state.videoReducer.videos.find(vid => vid.id === )'; // state.battleReducer.battles.find(stuff to find the battle)
      // const submissionVideos = state.videoReducer.videos.filter(vid => {
      //   return state.battleReducer.battles.battlesList.videoIds.id.find(
      //     id => id === vid._id
      //   );
      // });
      // console.log(submissionVideos);
    }
  };
};

export default connect(mapStateToProps)(BattleSubmission);
