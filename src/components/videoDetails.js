import React from 'react';

export default function VideoDetails(props) {
  return (
    <div>
      <h2>{props.djName}</h2>
      <p>{props.title}</p>
    </div>
  );
}
