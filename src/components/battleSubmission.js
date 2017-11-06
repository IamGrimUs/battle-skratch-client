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

    return this.state.videoCount > 0 ? (
      <section>
        <h1 className="page-title">battle submission</h1>
        <div className="content-frame">
          <BattleSubmissionCard
            onLoadNext={this.loadNext}
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
      <section>No Conent</section>
    );
  }
}

const mapStateToProps = state => {
  return { battleSubmission: state.battleSubmissionReducer.battleSubmission };
};

export default connect(mapStateToProps)(BattleSubmission);
