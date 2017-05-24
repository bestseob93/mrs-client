import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DoctorsComponent } from 'components';

class Doctors extends Component {
  render() {
    return (
      <div>
        <DoctorsComponent myDoctors={this.props.patientMyInfos.myDoctor}/>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      patientMyInfos: state.auth.myPageInfo
    };
  },
  null
)(Doctors);
