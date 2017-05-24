import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AdminPageComponent } from 'components';

import * as bed from 'ducks/bed.duck';
import * as auth from 'ducks/auth.duck';

class AdminPage extends Component {

  shouldComponentUpdate() {
    return true;
  }

  render() {
      console.log(this.props);
      const { patients, bedInfo, isListFetching, AuthActions, BedActions, bedListFetching } = this.props;
      console.log(isListFetching);
      return (
        <div className="row">
            <AdminPageComponent patients={patients}
                                bedInfo={bedInfo}
                                AuthActions={AuthActions}
                                BedActions={BedActions}
                                bedListFetching={bedListFetching}
                                isListFetching={isListFetching}/>
        </div>
      );
    }
  }

export default connect(
  state => {
    return {
      bedInfo: state.bed.beds,
      isListFetching: state.auth.getListRequest.fetching,
      bedListFetching: state.bed.request.fetching,
      patients: state.auth.patientList
    };
  },
  dispatch => {
    return {
      BedActions: bindActionCreators({
        requestBedList: bed.requestGetBedList
      }, dispatch),
      AuthActions: bindActionCreators({
        requestPatientList: auth.requsetGetPatientList
      }, dispatch)
    };
  }
)(AdminPage);