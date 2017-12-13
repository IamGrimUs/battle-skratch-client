import React from 'react';
import { Link } from 'react-router-dom';

export default function BattleSubmissionImgLink(props) {
  return (
    <div className="contest-entry-video-frame">
      <Link to={`/battleSubmission/${props.battleId}/${props.videoId}`}>
        <img src={props.videoImgLink} alt={props.title} />
      </Link>
    </div>
  );
}
