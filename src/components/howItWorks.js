import React from 'react';
import './howItWorks.css';

export default class HowItWorks extends React.Component {
  render() {
    return (
      <section className="how-it-works">
        <h2>How it works</h2>
        <section className="instruction-container">
          <p>
            Battle durations are set for 30 days. New battle orders are assigned
            as soon as the last battle has expired.
          </p>
          <p>
            Battle orders can be found in the site menu third from the top or
            fourth from the bottom depending on how you like to count. The
            battle order page contains all the neccessary information you'll
            need to create your video for submission.
          </p>
          <p className="black">
            Battle orders are broken into three key pieces of information.
          </p>
          <ul>
            <li>
              <span className="black">video length:</span> Videos should not
              exceed the defined duration
            </li>
            <li>
              <span className="black">battle constraints:</span> this rule
              defines what technique are available to use in the video
              submissions
            </li>
            <li>
              <span className="black">offical beat:</span> all contestants must
              use the approved beat.
            </li>
          </ul>
          <p>
            Once the battle orders have been reviewed and the offical beat
            acquired. The challenge is laid. It's up to you to create a video
            submission for the current battle. When your ready upload the video
            to your youtube account. Then visit the enter battle link and submit
            the embed video code from youtube. Detailed insructions can be found
            at enter the battle from the site menu.
          </p>
        </section>
      </section>
    );
  }
}
