import React from 'react';

export default function VideoNavigation(props) {
  return (
    <div className="cframe-cone-video-next-prev">
      <p className="text-left">
        <button onClick={props.onLoadPrevious}>&lt; prev</button>
      </p>
      <p className="text-right">
        <button onClick={props.onLoadNext}>next &gt;</button>
      </p>
    </div>
  );
}
