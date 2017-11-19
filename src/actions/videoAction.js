export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const FETCH_VIDEO = 'FETCH_VIDEO';

export const fetchVideos = videos => ({
  type: FETCH_VIDEOS,
  videos
});

export const fetchVideo = video => ({
  type: FETCH_VIDEO,
  video
});
