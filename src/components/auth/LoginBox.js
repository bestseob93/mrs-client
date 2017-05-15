import React, { Component } from 'react';

class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.state= {
      patientName: '',
      patientBarcode: ''
    };

    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onInputFocus(e) {
    e.target.parentNode.classList.add('input--filled');
  }

  onInputBlur(e) {
    if(e.target.value === '') {
      e.target.parentNode.classList.remove('input--filled');
    }
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state.patientName, this.state.patientBarcode);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const { onInputFocus, onInputBlur, handleSubmit, handleChange } = this;
    return (
              <div className="z-depth-1 grey lighten-4 login-box">
                  <div className="row">
                    <div className="col s12">
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input onChange={handleChange} className="validate" type="text" name="patientName" id="patientName" />
                      <label for="patientName">환자 분 성함을 입력해주세요.</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input onChange={handleChange} className="validate" type="password" name="patientBarcode" id="patientBarcode" />
                      <label for="patientBarcode">손목에 환자번호를 입력해주세요.</label>
                    </div>
                    <label className="right">
      								<a className="pink-text" href="#!"><b>번호를 잃어버리셨나요?</b></a>
      							</label>
                  </div>

                  <br/>
                  <center>
                    <div className="row">
                      <button onClick={handleSubmit} type="submit" name="btn_login" className="col s12 btn btn-large waves-effect indigo">Login</button>
                    </div>
                  </center>
              </div>
    );
  }
}

export default LoginBox;
