import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as medical from 'ducks/medical.duck';

import { DrugRegisterBox } from 'components';

class DrugRegister extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(drug) {
    const { DrugActions } = this.props;
    const mType = 'drug';
    DrugActions.requestDrugRegister(mType, drug);
  }

  render() {
    const { handleSubmit } = this;
    return (
      <div>
        <DrugRegisterBox onSubmit={handleSubmit}/>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      isFetching: state.medical.request.fetching
    };
  },
  dispatch => ({
    DrugActions: bindActionCreators({
      requestDrugRegister: medical.requestDrugRegister
    }, dispatch)
  })
)(DrugRegister);
