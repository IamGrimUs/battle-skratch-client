import React from 'react';

export default function Video(props) {
  return (
    <div className="cframe-cone-video-frame">
      <div
        dangerouslySetInnerHTML={{
          __html: props.videoLink
        }}
      />
    </div>
  );
}
