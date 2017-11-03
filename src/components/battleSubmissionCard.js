import React from 'react';
import VideoVotes from './videoVotes';
import VideoDetails from './videoDetails';
import Video from './video';
import VideoNavigation from './videoNavigation';

export default function BattleSubmissionCard(props) {
  console.log('props inside of BattleSubmissionCard', props);
  return (
    <section className="cframe-child-one">
      <Video videoLink={props.videoLink} />
      <VideoNavigation
        onLoadNext={props.onLoadNext}
        onLoadPrevious={props.onLoadPrevious}
      />
      <VideoDetails title={props.title} djName={props.djName} />
      <VideoVotes voteUp={props.voteUp} voteDown={props.voteDown} />
    </section>
  );
}
