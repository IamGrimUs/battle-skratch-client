import React from 'react';
import { Link } from 'react-router-dom';

export default function BattleSubmissionLink() {
  return (
    <div className="contest-entry-button-block">
      <button>
        <Link to="/battleSubmission">watch the video</Link>
      </button>
    </div>
  );
}
