import React from 'react';

export default function BattleSubmissionVotes(props) {
  return (
    <div className="contest-entry-button-block">
      <button className="vote" onClick={props.onVoteUp}>
        <span role="img" aria-label="thumb up">
          &#128077;
        </span>
        <span>{props.voteUp}</span>
      </button>
      <button className="vote" onClick={props.onVoteDown}>
        <span role="img" aria-label="thumb down">
          &#x1f44e;
        </span>
        <span>-{props.voteDown}</span>
      </button>
    </div>
  );
}
