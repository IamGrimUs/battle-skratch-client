import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoNavigation() {
  return (
    <div className="cframe-cone-video-next-prev">
      <p className="text-left">
        <Link to="#">&lt; prev</Link>
      </p>
      <p className="text-right">
        <Link to="#">next &gt;</Link>
      </p>
    </div>
  );
}
