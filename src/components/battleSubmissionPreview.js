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
    return (
      <section className="contest-entry">
        <BattleSubmissionImgLink
          videoImgLink={this.props.videoImgLink}
          alt={this.props.title}
        />
        <div className="contest-entry-description-block">
          <p>{this.state.contender.name}</p>
        </div>
        <BattleSubmissionLink videoLink={this.props.videoLink} />
      </section>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     // contender: state.contenderReducer.contender,
//     props: ownProps
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // fetchContenderById: userId => {
//     //   const headers = new Headers();
//     //   const req = new Request(`${BASE_URL}api/user/${userId}`, {
//     //     method: 'GET',
//     //     mode: 'cors',
//     //     headers: headers
//     //   });
//     //   fetch(req)
//     //     .then(res => res.json())
//     //     .then(data => {
//     //       dispatch(fetchContenderById(data));
//     //     })
//     //     .catch(err => console.log(err));
//     // }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(
//   BattleSubmissionPreview
// );
