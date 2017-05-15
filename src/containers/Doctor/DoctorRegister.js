import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DoctorRegisterBox } from 'components';

import * as doctor from 'ducks/doctor.duck';

class DoctorRegister extends Component {
  render() {
    return (
      <div>
        <DoctorRegisterBox DoctorActions={this.props.DoctorActions} isFetching={this.props.isFetching}/>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      isFetching: state.doctor.request.fetching
    };
  },
  dispatch => ({
      DoctorActions: bindActionCreators({
        requestDoctorRegister: doctor.doctorRegister
      }, dispatch)
  })
)(DoctorRegister);
