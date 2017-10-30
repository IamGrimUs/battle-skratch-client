import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
            <Link to="{props.social_fb}">
              <img src="../img/facebook.jpg" alt="social icon" />
            </Link>
          </figure>
          <figure>
            <Link to="{props.social_tw}">
              <img src="../img/twitter.jpg" alt="social icon" />
            </Link>
          </figure>
          <figure>
            <Link to="{props.social_yt}">
              <img src="../img/facebook.jpg" alt="social icon" />
            </Link>
          </figure>
          <figure>
            <Link to="{props.social_ig}">
              <img src="../img/twitter.jpg" alt="social icon" />
            </Link>
          </figure>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  djname: state.djName,
  social_fb: state.social_fb,
  social_tw: state.social_tw,
  social_yt: state.social_yt,
  social_ig: state.social_ig,
  battlesEntered: state.battlesEntered,
  battlesWon: state.battlesWon,
  totalPoints: state.totalPoints
});

export default connect(mapStateToProps(UserProfileCard));
