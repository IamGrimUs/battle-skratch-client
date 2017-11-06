export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (author, comment, videoId) => ({
  type: ADD_COMMENT,
  author,
  comment,
  videoId
});
