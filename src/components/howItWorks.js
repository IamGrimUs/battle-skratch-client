import React from 'react';
import SiteNav from './siteNav';
import './howItWorks.css';

export default class HowItWorks extends React.Component {
  render() {
    return (
      <section>
        <SiteNav />
        <h1 class="page-title">How it works</h1>
        <section class="instruction-container">
          <p>
            Battle Skratch is an app for turntablists of all skill levels. The
            aim is to promote the art of turntablism and the community of djs
            through monthly informal battles. Each month a new beat will be
            paired to randomly generated instructions for qualifications. Battle
            orders are maintained on the home page and will update on the first
            of the month.
          </p>
          <p>when your ready put on your big boy pants and enter the arena.</p>
        </section>
        <section class="content-block--100">
          <section class="instruction-container">
            <h2 class="battle-orders-title">rules of engagment</h2>
            <ul>
              <li>
                <span>step zero:</span> don't be a dick
              </li>
              <li>
                <span>step one:</span> create an account
              </li>
              <li>
                <span>step two:</span> read the battle report
              </li>
              <li>
                <span>step three:</span> download the contest beat
              </li>
              <li>
                <span>step four:</span> record a video &amp; upload to youtube
              </li>
              <li>
                <span>step: five:</span> submit the video for battle entry
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
