import React, { Component, PropTypes } from 'react';
import { Button, Row, Input } from 'react-materialize';

const propTypes = {
  onSubmit: PropTypes.func
};

class RegisterBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patientName: '',
      patientGender: '',
      patientTel: '',
      patientYear: '',
      patientMonth: '',
      patientDay: '',
      patientAddress: '',
      bloodType: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderYears = this.renderYears.bind(this);
    this.renderDays = this.renderDays.bind(this);
  }

  handleChange(e) {
    let nextState = {};

    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  async handleSubmit(e) {
    const { onSubmit } = this.props;
    e.preventDefault();
    const patientInfo = {
      patientName: this.state.patientName,
      gender: this.state.patientGender,
      patientTel: this.state.patientTel,
      patientBirth: this.state.patientYear + this.state.patientMonth + this.state.patientDay,
      address: this.state.patientAddress,
      bloodType: this.state.bloodType
    };

    console.log(patientInfo);

    await onSubmit(patientInfo);
  }

  renderYears() {
    let myDate = new Date();
    let year = myDate.getFullYear();
    let options = [];
    for(let i = year; i > 1900; i--) {
      options.push(i);
    }

    const yearItem = options.map((item) => (
      <option key={item} value={item}>{item}</option>
    ));
    return yearItem;
  }

  renderDays() {
    let options = [];
    for(let i = 1; i < 32; i++) {
      options.push(i);
    }

    const dayItem = options.map((item) => (
      <option key={item} value={item}>{item}</option>
    ));
    return dayItem;
  }

  render() {
    const { handleChange, handleSubmit, renderYears, renderDays } = this;
    const { isFetching } = this.props;

    return (
      <div className="z-depth-1 grey lighten-4 register-form">
          <Row>
              <Input s={7} label="환자 이름을 입력해주세요" onChange={handleChange} name="patientName" value={this.state.patientName}/>
              <Input s={5} type='select' onChange={handleChange} name="patientGender" value={this.state.patientGender}>
                <option value="gender">성별</option>
                <option value="Male">남</option>
                <option value="Femaile">여</option>
              </Input>
          </Row>

          <Row>
            <Input s={12} label="전화번호를 입력해주세요" onChange={handleChange} name="patientTel" value={this.state.patientTel}/>
          </Row>

          <Row>
            <Input s={4} type='select' onChange={handleChange} name="patientYear" value={this.state.patientYear}>
              <option value="years">년도</option>
            {renderYears()}
            </Input>
            <Input s={4} type='select' onChange={handleChange} name="patientMonth" value={this.state.patientMonth}>
              <option value="months">월</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Input>
            <Input s={4} type='select' onChange={handleChange} name="patientDay" value={this.state.patientDay}>
              <option value="days">일</option>
              {renderDays()}
            </Input>
          </Row>

          <Row>
            <Input s={12} label="주소를 입력해주세요" onChange={handleChange} name="patientAddress" value={this.state.patientAddress}/>
          </Row>

          <Row>
            <Input s={12} type='select' onChange={handleChange} name="bloodType" value={this.state.bloodType}>
                <option value="bloodType">혈액형 선택</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O">O</option>
                <option value="AB">AB</option>
            </Input>
          </Row>

          <Row className="center">
              <Button type="submit" onClick={handleSubmit} waves="light" name="btn_submit">{isFetching ? '로딩중 ...' : '다음'}</Button>
          </Row>
      </div>
    );
  }
}

RegisterBox.propTypes = propTypes;

export default RegisterBox;
