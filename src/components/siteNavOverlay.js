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
            <span>battle creation</span>
          </Link>
        </li>
        <li>
          <Link to="/howItWorks">
            <span>how it works</span>
          </Link>
        </li>
        <li>
          <Link to="/battleSubmission">
            <span>enter battle</span>
          </Link>
        </li>
        <li>
          <Link to="/contenders">
            <span>contenders</span>
          </Link>
        </li>
      </ul>
      <Link to="/" class="close-menu">
        Close
        <span />
      </Link>
    </nav>
  );
}
