import React from 'react';
import BattleSubmissionLink from './battleSubmissionLink';
import BattleSubmissionImgLink from './battleSubmissionImgLink';

export default function BattleSubmissionPreview(props) {
  console.log(props);
  return (
    <section className="contest-entry">
      <BattleSubmissionImgLink
        videoImgLink={props.videoImgLink}
        alt={props.title}
      />
      <div className="contest-entry-description-block">
        <p>{props.djName}</p>
      </div>
      <BattleSubmissionLink videoLink={props.videoLink} />
    </section>
  );
}
