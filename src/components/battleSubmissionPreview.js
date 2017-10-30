import React from 'react';
import BattleSubmissionLink from './battleSubmissionLink';
import BattleSubmissionImgLink from './battleSubmissionImgLink';

export default function BattleSubmissionPreview() {
  return (
    <section class="contest-entry-block">
      <section class="contest-entry">
        <BattleSubmissionImgLink />
        <div class="contest-entry-description-block">
          <p>iam grimus</p>
        </div>
        <BattleSubmissionLink />
      </section>
    </section>
  );
}
