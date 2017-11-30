import React from 'react';
import './userProfileCard.css';
export default function UserProfileCard(props) {
  return (
    <div className="user-profile">
      <div className="user-profile-info">
        <h3>{props.name}</h3>
        <div className="battle-status">
          <p>battles entered</p>
          <p>{props.battlesEntered}</p>
          <p>battles won</p>
          <p>{props.battlesWon}</p>
        </div>
      </div>
    </div>
  );
}
