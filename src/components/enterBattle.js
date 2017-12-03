import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { fetchCurrentBattle } from '../actions/battleAction';
import { BASE_URL } from '../constant';
import './enterBattle.css';

export class EnterBattle extends React.Component {
  constructor(props) {
    super(props);
    this.createVideo = this.createVideo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    console.log('willmount', this.props.contender);
    if (!this.props.contender) {
      return;
    }
    this.props.fetchCurrentBattle(this.props.contender);
  }

  createVideo(videoLink, title) {
    let contender = this.props.contender;
    const data = JSON.stringify({
      videoLink,
      title,
      userId: this.props.contender.userId,
      voteCountUp: 0,
      voteCountDown: 0,
      comments: []
    });
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${contender.authToken}`
    });
    const req = new Request(
      `${BASE_URL}api/video/${this.props.currentBattleId}`,
      {
        method: 'POST',
        mode: 'cors',
        body: data,
        headers: headers
      }
    );
    fetch(req).catch(err => console.log(err));
  }

  onSubmit(value) {
    const videoLink = value.videoCreation;
    const videoTitle = value.videoTitle;
    this.createVideo(videoLink, videoTitle);
    value.videoTitle = '';
    value.videoCreation = '';
    return <Redirect to={{ pathname: '/home' }} />;
  }

  render() {
    return (
      <section className="enter-battle">
        <h2>enter the battle</h2>
        <section className="enter-battle-container">
          <ul>
            <li>
              <span className="black">Step one:</span> Upload the video to your
              youtube account
            </li>
            <li>
              <span className="black">Step two:</span> Click the share link just
              below the video
              <br />
              <img
                src="../img/youtube_share_button_300x145.png"
                alt="demo of share link"
              />
            </li>
            <li>
              <span className="black">Step three:</span> Click the embed link in
              the bottom right corner
              <br />
              <img
                src="../img/youtube_embed_button_300x149.png"
                alt="demo of embed link"
              />
            </li>
            <li>
              <span className="black">Step four:</span> Copy the embed video
              code. You can leave the options checked or uncheck them it's your
              call.
              <br />
              <img
                src="../img/youtube_embed_code_600x230.png"
                alt="demo of embed code"
                className="code"
              />
            </li>
            <li>
              <span className="black">Step five:</span> Paste the embed code
              from youtube into the first input field below. Then enter a title
              of your video in the second.
            </li>
          </ul>
          <WrappedCommentForm onSubmit={this.onSubmit} />
        </section>
      </section>
    );
  }
}

const VideoCreationForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="videoCreationForm" onSubmit={handleSubmit}>
      <Field
        name="videoCreation"
        type="text"
        component="input"
        placeholder="paste youtube embed code here"
        required
      />
      <Field
        name="videoTitle"
        type="text"
        component="input"
        placeholder="go on give it a title"
        required
      />
      <input type="submit" disabled={pristine || submitting} hidden />
    </form>
  );
};

const afterSubmit = value => reset('VideoCreationForm');
const WrappedCommentForm = reduxForm({
  form: 'VideoCreationForm',
  onSubmitSuccess: afterSubmit
})(VideoCreationForm);

const mapStateToProps = state => {
  return {
    currentBattleId: state.battleReducer.currentBattle.id,
    contender: state.contenderReducer.contender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentBattle: contender => {
      const headers = new Headers({
        Authorization: `Bearer ${contender.authToken}`
      });
      const req = new Request(`${BASE_URL}api/battle/currentBattle`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchCurrentBattle(data.currentBattle));
        })
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnterBattle);
