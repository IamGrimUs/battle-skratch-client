import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteNavOverlay() {
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <Link to="/login">
            <span className="navOverlaySpan">login</span>
          </Link>
        </li>
        <li>
          <Link to="/howItWorks">
            <span className="navOverlaySpan">how it works</span>
          </Link>
        </li>
        <li>
          <Link to="/battleOrders">
            <span className="navOverlaySpan">battle orders</span>
          </Link>
        </li>
        <li>
          <Link to="/enterBattle">
            <span className="navOverlaySpan">enter the battle</span>
          </Link>
        </li>
        <li>
          <Link to="/battleList">
            <span className="navOverlaySpan">battle list</span>
          </Link>
        </li>
        <li>
          <Link to="/contenders">
            <span className="navOverlaySpan">contenders</span>
          </Link>
        </li>
      </ul>
      <Link to="/" className="close-menu">
        <span>Close</span>
      </Link>
    </nav>
  );
}
