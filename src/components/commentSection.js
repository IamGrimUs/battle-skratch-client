import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form';

import { BASE_URL } from '../constant';
import { addComment } from '../actions/videoAction';
import Comment from './comment';

import './battleSubmission.css';

export class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: props.videoId,
      comments: [{ author: props.author, comment: props.comment }]
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

const CommentForm = props => {
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

const pushVideoComment = (videoId, author, comment) => {
  const data = JSON.stringify({ author, comment });
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const req = new Request(`${BASE_URL}api/video/${videoId}`, {
    method: 'PUT',
    mode: 'cors',
    body: data,
    headers: headers
  });
  console.log(req);
  fetch(req).catch(err => console.log(err));
};

const mapStateToProps = state => {
  return {
    videos: state.videoReducer.videos
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: value => {
      const comment = value.comment;
      const author = value.author;
      const videoId = ownProps.videoId;
      dispatch(addComment(author, comment, videoId));
      pushVideoComment(videoId, author, comment);
      value.author = '';
      value.comment = '';
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
