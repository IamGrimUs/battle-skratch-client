import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form';

import { addComment } from '../actions/commentAction';
import Comment from './comment';

import './battleSubmission.css';

export class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.videoId
      //comments: [{ author: this.props.author, comment: this.props.comment }]
    };
  }

  render() {
    return (
      <section className="cframe-child-two">
        <h2>Post a comment</h2>
        {this.props.comments.map((comment, index) => (
          <Comment
            key={index}
            commentAuthor={comment.author}
            comment={comment.comment}
          />
        ))}
        <WrappedCommentForm onSubmit={this.props.onSubmit} />
      </section>
    );
  }
}

function CommentForm(props) {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <Field
        name="author"
        type="text"
        component="input"
        placeholder="your name"
        required
      />
      <Field
        name="comment"
        type="text"
        component="input"
        placeholder="say something..."
        required
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

const mapStateToProps = state => {
  return { battleSubmission: state.battleSubmissionReducer.battleSubmission };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: value => {
      const comment = value.comment;
      const author = value.author;
      dispatch(addComment(author, comment, ownProps.videoId));
      value.author = '';
      value.comment = '';
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
