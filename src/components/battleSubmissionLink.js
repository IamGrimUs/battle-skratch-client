import React from 'react';
import { Link } from 'react-router-dom';

export default function BattleSubmissionLink(props) {
  return (
    <div className="contest-entry-button-block">
      <button>
        <Link to={`/battleSubmission/${props.battleId}/${props.videoId}`}>
          watch the video
        </Link>
      </button>
    </div>
  );
}
