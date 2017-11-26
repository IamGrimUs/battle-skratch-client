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
            djs through monthly friendly and informal battles.
          </p>
          <p>
            On the second day of each month a new battle will be randomly
            generated. Every battles will have a set of instructions to follow
            and a specific beat to use. For example the contestents may be asked
            to perform a series of paticular scratches on a swing beat or a
            beat-juggling pattern on an electro loop. Battle submisson can be
            voted up or down by fellow contenders with current Champions updated
            daily and Grand Champions updated monthly.
          </p>
          <p>
            The Battle Skratch app is currently a proof of concept. Current
            contenders are invite only. However, if you would like to demo the
            app the you can assume the persona of{' '}
            <span className="dj-name">DJ You</span>. He's battle tested and
            waiting for you.
          </p>
          <p>when your ready head over to menu button and select&nbsp;login.</p>
          <p>
            <span className="black">
              user: you<br />
              password: 123
            </span>
          </p>
        </section>
      </section>
    );
  }
}
