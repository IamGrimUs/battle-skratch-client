import React from 'react';
import VideoVotes from './videoVotes';
import VideoDetails from './videoDetails';
import Video from './video';
import VideoNavigation from './videoNavigation';

export default function BattleSubmissionCard() {
  return (
    <section className="cframe-child-one">
      <Video />
      <VideoNavigation />
      <VideoDetails />
      <VideoVotes />
    </section>
  );
}
