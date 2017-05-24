import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as auth from 'ducks/auth.duck';

import { RegisterSecondBox } from 'components';

class RegisterSecond extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
         <RegisterSecondBox patientSelects={this.props.patientSelects} AuthActions={this.props.AuthActions} isFetching={this.props.isFetching}/>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      isFetching: state.auth.infoRequest.fetching,
      patientSelects: state.auth.patientMore,
      exRequest: state.auth.request.fetched
    };
  },
  dispatch => {
    return {
      AuthActions: bindActionCreators({
        requestPatientInfos: auth.getPatientInfo,
        postPatientInfos: auth.postPatientInfo
      }, dispatch)
    };
  }
)(RegisterSecond);
