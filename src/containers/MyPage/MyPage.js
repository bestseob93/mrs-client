import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MyPageComponent } from 'components';

import * as auth from 'ducks/auth.duck';

class MyPage extends Component {
  async componentDidMount() {
    const { AuthActions } = this.props;
    await AuthActions.requestGetPatientMyPage();
  }

  render() {
    console.log(this.props);
    return (
          <div>
            <MyPageComponent/>

            {this.props.children}
          </div>
    );
  }
}

export default connect(
  state => {
    return {
      isFetching: state.auth.myPageRequest.fetching,
      patientMyInfos: state.auth.myPageInfo
    };
  },
  dispatch => {
    return {
      AuthActions: bindActionCreators({
        requestGetPatientMyPage: auth.requestGetPatientMyPage
      }, dispatch)
    };
  }
)(MyPage);
