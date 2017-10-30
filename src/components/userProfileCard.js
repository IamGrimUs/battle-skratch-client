import React from 'react';

export function UserProfileCard(props) {
  console.log('hello world');
  return (
    <div className="user-profile">
      <figure className="user-profile-pic" />
      <div className="user-profile-info">
        <h3>{props.djName}</h3>
        <div className="battle-status">
          <p>battles entered</p>
          <p>{props.battlesEntered}</p>
          <p>battles won</p>
          <p>{props.battlesWon}</p>
          <p>total points</p>
          <p>{props.totalPoints}</p>
        </div>
        <div className="user-profile-social-container">
          <figure>
            <a href={props.social_fb} target="_blank">
              <img src="../img/facebook.jpg" alt="social icon" />
            </a>
          </figure>
          <figure>
            <a href={props.social_tw} target="_blank">
              <img src="../img/twitter.jpg" alt="social icon" />
            </a>
          </figure>
          <figure>
            <a href={props.social_yt} target="_blank">
              <img src="../img/facebook.jpg" alt="social icon" />
            </a>
          </figure>
          <figure>
            <a href={props.social_ig} target="_blank">
              <img src="../img/twitter.jpg" alt="social icon" />
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
}
