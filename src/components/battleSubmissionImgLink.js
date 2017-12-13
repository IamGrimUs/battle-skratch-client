import React from 'react';

export default function BattleSubmissionImgLink(props) {
  return (
    <div className="contest-entry-video-frame">
      <img src={props.videoImgLink} alt={props.title} />
    </div>
  );
}
