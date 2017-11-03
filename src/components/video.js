import React from 'react';

export default function Video(props) {
  return (
    <div className="cframe-cone-video-frame">
      <iframe
        src={props.videoLink}
        frameBorder="0"
        allowFullScreen
        title="uniqueIdentifier"
      />
    </div>
  );
}
