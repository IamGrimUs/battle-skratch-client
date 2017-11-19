import React from 'react';
// import { connect } from 'react-redux';

import BattleSubmissionLink from './battleSubmissionLink';
import BattleSubmissionImgLink from './battleSubmissionImgLink';
// import { fetchContenderById } from '../actions/contenderAction';
import { BASE_URL } from '../constant';

export default class BattleSubmissionPreview extends React.Component {
  componentWillMount() {
    this.fetchContenderById(this.props.userId);
  }

  state = {
    contender: {}
  };

  fetchContenderById = userId => {
    const headers = new Headers();
    const req = new Request(`${BASE_URL}api/user/${userId}`, {
      method: 'GET',
      mode: 'cors',
      headers: headers
    });
    fetch(req)
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...this.state,
          contender: data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log('preview props', this.props);
    return (
      <section className="contest-entry">
        <BattleSubmissionImgLink
          videoImgLink={this.props.videoImgLink}
          alt={this.props.title}
        />
        <div className="contest-entry-description-block">
          <p>{this.state.contender.name}</p>
        </div>
        <BattleSubmissionLink
          // videoLink={this.props.videoLink}
          // battleId={this.props.battleIds}
          // battleIndex={this.props.battleIndex}
          battleId={this.props.viewedBattleId}
          videoId={this.props.videoId}
        />
      </section>
    );
  }
}
