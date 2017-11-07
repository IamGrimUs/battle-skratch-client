import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteNavOverlay() {
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <Link to="/login">
            <span>login</span>
          </Link>
        </li>
        <li>
          <Link to="/battleCreation">
            <span class="navOverlaySpan">battle creation</span>
          </Link>
        </li>
        <li>
          <Link to="/howItWorks">
            <span class="navOverlaySpan">how it works</span>
          </Link>
        </li>
        <li>
          <Link to="/battleSubmission">
            <span class="navOverlaySpan">enter battle</span>
          </Link>
        </li>
        <li>
          <Link to="/contenders">
            <span class="navOverlaySpan">contenders</span>
          </Link>
        </li>
      </ul>
      <Link to="/" className="close-menu">
        Close
        <span />
      </Link>
    </nav>
  );
}
