import React from 'react';
import './greeting.css';

export default class HowItWorks extends React.Component {
  render() {
    return (
      <section className="introduction">
        <h2>welcome to the arena</h2>
        <section className="instruction-container">
          <p>
            Battle Skratch is a web app for turntablists of all skill levels.
            The goal is to promote the art of turntablism and the community of
            DJs through monthly friendly and informal video battles.
          </p>
          <p>
            On the second day of each month, a new battle will be randomly
            generated. Every battle will have a set of instructions to follow
            and a specific beat to use. For example, the contestents may be
            asked to perform a series of paticular scratches on a swing beat or
            a beat-juggling pattern using an electro loop. Contestants will be
            required to record a video for submission following the specific
            battle rules. Battle submisson will be voted up or down by fellow
            contenders with current Champions updated daily and Grand Champions
            updated monthly.
          </p>
          <p>
            The Battle Skratch app is currently a proof of concept. Current
            contenders are invite only. However, if you would like to demo the
            app you can assume the persona of{' '}
            <span className="dj-name">DJ You</span>.
          </p>
          <p>
            When you're ready head over to menu button and select&nbsp;login.
          </p>
        </section>
      </section>
    );
  }
}
