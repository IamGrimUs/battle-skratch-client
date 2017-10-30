import React from 'react';
import Comment from './comment';
import Input from './input';
import './battleSubmission.css';

export default function CommentSection() {
  return (
    <section class="cframe-child-two">
      <h2>Post a comment</h2>
      <Comment />
      <form class="comment-form">
        <Input type="text" placeholder="say something..." />
        <input type="submit" hidden />
      </form>
    </section>
  );
}
