import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';

import Comment from './comment';

import './battleSubmission.css';

export class CommentSection extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <section className="cframe-child-two">
        <h2>Post a comment</h2>
        <Comment />
        <form
          className="comment-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <Field
            name="commentText"
            id="commentText"
            type="text"
            component="input"
            placeholder="say something..."
          />
          <input type="submit" hidden />
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'comment',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(CommentSection);
