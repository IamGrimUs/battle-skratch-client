import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form';

import { BASE_URL } from '../constant';
import './enterBattle.css';

export class EnterBattle extends React.Component {
  constructor(props) {
    super(props);
    this.createVideo = this.createVideo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  createVideo(videoLink, videoTitle) {
    console.log('this.props.currentBattleId ->', this.props.currentBattleId);
    const data = JSON.stringify({
      videoLink,
      videoTitle,
      userId: '59ffae3a734d1d63bdd2ab44'
    });
    const headers = new Headers({ 'Content-Type': 'application/json' });
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
  }

  render() {
    return (
      <section>
        <h1 className="page-title">enter the battle</h1>
        <section className="login-form-container">
          {/* <form ref="commentForm">
            <Input type="text" placeholder="link to youtube video" required />
            <button type="submit" hidden />
          </form> */}
          <WrappedCommentForm onSubmit={this.onSubmit} />
        </section>
      </section>
    );
  }
}

function VideoCreationForm(props) {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="videoCreationForm" onSubmit={handleSubmit}>
      <Field
        name="videoTitle"
        type="text"
        component="input"
        placeholder="your video title"
        required
      />
      <Field
        name="videoCreation"
        type="text"
        component="input"
        placeholder="paste your youtube share link"
        required
      />
      <input type="submit" disabled={pristine || submitting} hidden />
    </form>
  );
}

const afterSubmit = value => reset('VideoCreationForm');
const WrappedCommentForm = reduxForm({
  form: 'VideoCreationForm',
  onSubmitSuccess: afterSubmit
})(VideoCreationForm);

const mapStateToProps = state => {
  return {
    currentBattleId: state.battleReducer.currentBattle.id
  };
};
export default connect(mapStateToProps)(EnterBattle);
