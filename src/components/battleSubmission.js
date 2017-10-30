import React from 'react';
import BattleSubmissionCard from './battleSubmissionCard';
import CommentSection from './commentSection';
import './battleSubmission.css';

export default class Login extends React.Component {
  render() {
    return (
      <section>
        <h1 class="page-title">battle submission</h1>
        <div class="content-frame">
          <BattleSubmissionCard />
          <CommentSection />
        </div>
      </section>
    );
  }
}
