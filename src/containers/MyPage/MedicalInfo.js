import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MedicalInfoComponent } from 'components';

class MedicalInfo extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <MedicalInfoComponent myMedical={this.props.patientMyInfos.myMedicals}/>
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
)(MedicalInfo);
