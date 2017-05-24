import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MedicalRecordComponent } from 'components';

class MedicalRecord extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <MedicalRecordComponent myRecords={this.props.patientMyInfos.myInfo.recordFiles}/>
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
)(MedicalRecord);
