import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';

import Comment from './comment';

import './battleSubmission.css';

export default class CommentSection extends React.Component {
  onSubmit(value) {
    const comment = value.commentText;
    value.commentText = '';
    console.log(comment);
  }
  render() {
    return (
      <section className="cframe-child-two">
        <h2>Post a comment</h2>
        {this.props.comments.map((comment, index) => (
          <Comment
            key={index}
            commentAuthor={comment.author}
            commentText={comment.comment}
          />
        ))}
        <WrappedCommentForm onSubmit={this.onSubmit} />
      </section>
    );
  }
}

function CommentForm(props) {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <Field
        name="commentText"
        type="text"
        component="input"
        placeholder="say something..."
      />
      <input type="submit" disabled={pristine || submitting} hidden />
    </form>
  );
}

const afterSubmit = value => reset('CommentForm');
const WrappedCommentForm = reduxForm({
  form: 'comment',
  onSubmitSuccess: afterSubmit
})(CommentForm);
