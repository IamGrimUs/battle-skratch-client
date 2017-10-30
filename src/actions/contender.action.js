export const ADD_CONTENDER = 'ADD_CONTENDER';
export const addContender = (
  djName,
  social_fb,
  social_tw,
  social_yt,
  social_ig
) => ({
  type: ADD_CONTENDER,
  socialIcons: [social_fb, social_tw, social_yt, social_ig]
});
