import React from 'react';
import { Link } from 'react-router-dom';

export default function BattleSumissionImgLink() {
  return (
    <div class="contest-entry-video-frame">
      <Link to="/battleSubmission">
        <img src="../img/video-img.jpg" alt="battle submission" />
      </Link>
    </div>
  );
}
