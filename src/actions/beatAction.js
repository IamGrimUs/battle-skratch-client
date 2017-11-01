export const ADD_BEAT = 'ADD_BEAT';
export const addBeat = (link, producer, title, duration) => ({
  type: ADD_BEAT,
  link,
  producer,
  title,
  duration
});
