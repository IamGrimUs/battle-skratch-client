import React from 'react';
import './howItWorks.css';

export default class HowItWorks extends React.Component {
  render() {
    return (
      <section className="how-it-works">
        <h2>How it works</h2>
        <section className="instruction-container">
          <p>
            On the 2nd of each month new battle orders are assigned signaling
            the start of a new competition. Each battle will last for 30 days.
            New battle orders are assigned as soon as the last battle has
            expired.
          </p>
          <p>
            Battle orders can be found in the site menu and contain all the
            neccessary information you'll need to create your video for
            submission.
          </p>
          <p className="black">
            Battle orders are broken into three key pieces of information.
          </p>
          <ul>
            <li>
              <span className="black">video length:</span>
              <br /> videos should not exceed the defined duration
            </li>
            <li>
              <span className="black">battle constraints:</span>
              <br /> a list of available cuts to use in your video submission
              all others are prohibited.
            </li>
            <li>
              <span className="black">offical beat:</span>
              <br /> all contestants must use the approved beat.
            </li>
          </ul>
          <p>
            Once the battle orders have been reviewed it's up to you to create a
            video submission for the current battle.
          </p>
          <p>
            <span className="black">step one:</span>
            <br />
            Record a battle video.
          </p>
          <p>
            <span className="black">step two:</span>
            <br />
            Upload the video to youtube.
          </p>
          <p>
            <span className="black">step two:</span>
            <br />Visit the enter battle page and follow the steps to submit the
            video.
          </p>
        </section>
      </section>
    );
  }
}
