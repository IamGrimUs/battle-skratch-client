import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoNavigation() {
  return (
    <div class="cframe-cone-video-next-prev">
      <p class="text-left">
        <Link to="#">&lt; prev</Link>
      </p>
      <p class="text-right">
        <Link to="#">next &gt;</Link>
      </p>
    </div>
  );
}
