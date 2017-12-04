import React from 'react';
import Cookies from 'js-cookie';
import { logoutCurrentUser } from '../actions/contenderAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class SiteNavOverlay extends React.Component {
  logOut() {
    Cookies.remove('jwt');
    this.props.logoutCurrentUser();
  }

  render() {
    const contender = this.props.contender;
    return (
      <nav id="main-nav">
        <ul>
          {!contender.userId ? (
            <li>
              <Link to="/login">
                <span className="navOverlaySpan">login</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/">
                <span className="navOverlaySpan" onClick={this.logOut}>
                  logout
                </span>
              </Link>
            </li>
          )}
          {contender.userId && (
            <li>
              <Link to="/howItWorks">
                <span className="navOverlaySpan">how it works</span>
              </Link>
            </li>
          )}
          {contender.userId && (
            <li>
              <Link to="/battleOrders">
                <span className="navOverlaySpan">battle orders</span>
              </Link>
            </li>
          )}
          {contender.userId && (
            <li>
              <Link to="/enterBattle">
                <span className="navOverlaySpan">enter the battle</span>
              </Link>
            </li>
          )}
          {contender.userId && (
            <li>
              <Link to="/battleList">
                <span className="navOverlaySpan">battle list</span>
              </Link>
            </li>
          )}
          {contender.userId && (
            <li>
              <Link to="/contenders">
                <span className="navOverlaySpan">contenders</span>
              </Link>
            </li>
          )}
        </ul>
        <Link to="/" className="close-menu">
          <span>Close</span>
        </Link>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  contender: state.contenderReducer.contender
});

const mapDispatchToProps = dispatch => {
  return {
    logoutCurrentUser: () => {
      dispatch(logoutCurrentUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteNavOverlay);
