import React from 'react';

export default function BattleSubmissionVotes() {
  return (
    <div className="contest-entry-button-block">
      <button className="vote">
        <span role="img" aria-label="thumb up">
          &#128077;
        </span>
        <span>7</span>
      </button>
      <button className="vote">
        <span role="img" aria-label="thumb down">
          &#x1f44e;
        </span>
        <span>3</span>
      </button>
    </div>
  );
}
