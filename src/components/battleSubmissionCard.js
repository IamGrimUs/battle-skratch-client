import React from 'react';

import Video from './video';
import VideoNavigation from './videoNavigation';
import VideoDetails from './videoDetails';
import VideoVotes from './videoVotes';

export default function BattleSubmissionCard(props) {
  return (
    <section className="cframe-child-one">
      <Video videoLink={props.videoLink} />
      <VideoNavigation
        onLoadNext={props.onLoadNext}
        onLoadPrevious={props.onLoadPrevious}
      />
      <VideoDetails title={props.title} djName={props.djName} />
      <VideoVotes
        voteCountUp={props.voteCountUp}
        onVoteCountUp={props.onVoteCountUp}
        voteCountDown={props.voteCountDown}
        onVoteCountDown={props.onVoteCountDown}
      />
    </section>
  );
}
