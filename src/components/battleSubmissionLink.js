import React from 'react';
import { Link } from 'react-router-dom';

export default function BattleSubmissionLink(props) {
  return (
    <div className="contest-entry-button-block">
      <Link to={`/battleSubmission/${props.battleId}/${props.videoId}`}>
        <button className="watch-video">watch the video</button>
      </Link>
    </div>
  );
}
