import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as auth from 'ducks/auth.duck';

import { RegisterBox } from 'components';

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(patientInfo) {
    const { AuthActions } = this.props;
    AuthActions.localRegister(patientInfo).then(
      browserHistory.push('/registerSecond')
    );
  }

  render() {
    const { handleSubmit } = this;
    const { isFetching } = this.props;
    return (
      <div>
         <RegisterBox onSubmit={handleSubmit} isFetching={isFetching}/>
      </div>
    );
  }
}

export default connect(
  state => ({
      isFetching: state.auth.request.fetching
  }),
  dispatch => ({
      AuthActions: bindActionCreators({
        localRegister: auth.localRegister
      }, dispatch)
  })
)(Register);
