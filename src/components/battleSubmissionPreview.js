import React from 'react';
import BattleSubmissionLink from './battleSubmissionLink';
import BattleSubmissionImgLink from './battleSubmissionImgLink';

export default function BattleSubmissionPreview() {
  return (
    <section className="contest-entry-block">
      <section className="contest-entry">
        <BattleSubmissionImgLink />
        <div className="contest-entry-description-block">
          <p>iam grimus</p>
        </div>
        <BattleSubmissionLink />
      </section>
    </section>
  );
}
