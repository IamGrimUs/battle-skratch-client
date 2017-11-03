import React from 'react';

export default function Comments(props) {
  return (
    <div className="cframe-ctwo-comment-frame">
      <p>
        <span className="cframe-ctwo-comframe-author">
          {props.commentAuthor}
        </span>
        {props.commentText}
        <button className="cframe-ctwo-comframe-remove">x</button>
      </p>
    </div>
  );
}
