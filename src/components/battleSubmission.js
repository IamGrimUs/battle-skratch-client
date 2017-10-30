import React from 'react';
import BattleSubmissionCard from './battleSubmissionCard';
import CommentSection from './commentSection';
import './battleSubmission.css';

export default class Login extends React.Component {
  render() {
    return (
      <section>
        <h1 className="page-title">battle submission</h1>
        <div className="content-frame">
          <BattleSubmissionCard />
          <CommentSection />
        </div>
      </section>
    );
  }
}
