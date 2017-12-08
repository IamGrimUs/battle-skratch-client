import React from 'react';

export default function BattleSubmissionVotes(props) {
  return (
    <div className="contest-entry-button-block">
      <button className="vote" onClick={props.onVoteCountUp}>
        <span>vote up </span>
        <span role="img" aria-label="thumb up">
          &#128077;
        </span>
        <span>{props.voteCountUp}</span>
      </button>
      <button className="vote" onClick={props.onVoteCountDown}>
        <span>vote down </span>
        <span role="img" aria-label="thumb down">
          &#x1f44e;
        </span>
        <span>
          {props.voteCountDown === 0 || props.voteCountDown < 0
            ? props.voteCountDown
            : `-${props.voteCountDown}`}
        </span>
      </button>
    </div>
  );
}
