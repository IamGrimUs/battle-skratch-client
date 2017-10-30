import React from 'react';
import { Link } from 'react-router-dom';
import './siteNav.css';

export default class SiteNav extends React.Component {
  render() {
    return (
      <header className="header">
        <section className="menu-block">
          <div className="logo-block">
            <Link to="/">
              <h1>battle skratch</h1>
            </Link>
          </div>
          <Link to="#main-nav" className="menu-trigger">
            Menu
            <span />
          </Link>
        </section>
      </header>
    );
  }
}
