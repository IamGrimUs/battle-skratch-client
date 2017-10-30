import React from 'react';
import BattleHeadline from './battleHeadline';
import BattleSubmissionPreview from './battleSubmissionPreview';

export default function BattleCurrent() {
  return (
    <section class="content-block">
      <BattleHeadline />
      <BattleSubmissionPreview />
    </section>
  );
}
