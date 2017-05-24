import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MyPageComponent } from 'components';
import { Row, Col } from 'react-materialize';

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
            <Row>
              <Col s={12} l={12} m={12} className="center patient-info">
                 <p>침상번호: {this.props.patientMyInfos.myBed.beduuid}</p>
                  <span><strong className="patient-name">{this.props.patientMyInfos.myInfo.patientName}</strong>님의 쾌유를 위하여 최선을 다하겠습니다.</span>
              </Col>
           </Row>
            {this.props.location.pathname === "/MyPage" ? (   <MyPageComponent myInfo={this.props.patientMyInfos.myInfo}/>) : ""}

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
