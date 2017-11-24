import React from 'react';
import { Link } from 'react-router-dom';
import './siteNav.css';

export default class SiteNav extends React.Component {
  render() {
    return (
      <header className="header">
        <section className="menu-block">
          <Link to="#main-nav" className="menu-trigger">
            Menu
            <span />
          </Link>
          <div className="logo-block">
            <Link to="/">
              <h1>battle skratch</h1>
            </Link>
          </div>
        </section>
      </header>
    );
  }
}
