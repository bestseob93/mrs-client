import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';

class DoctorRegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: '',
      doctorName: '',
      doctorYear: '',
      doctorMonth: '',
      doctorDay: '',
      department: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderYears = this.renderYears.bind(this);
    this.renderDays = this.renderDays.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }


  clearInfo() {
    this.setState({
      job: '',
      doctorName: '',
      doctorYear: '',
      doctorMonth: '',
      doctorDay: '',
      department: ''
    });
  }

  async handleSubmit() {
    const { DoctorActions } = this.props;
    let job = this.state.job;
    let doctorName = this.state.doctorName;
    let birth = this.state.doctorYear + this.state.doctorMonth + this.state.doctorDay;
    let department = this.state.department;

    await DoctorActions.requestDoctorRegister(job, doctorName, birth, department);
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
    const { handleChange,
            clearInfo,
            handleSubmit,
            renderYears,
            renderDays } = this;

    const { isFetching } = this.props;

    return (
      <div className="z-depth-1 grey lighten-4 register-form">
          <Row>
            <Input s={12} type='select' onChange={handleChange} name="job" value={this.state.job}>
              <option value="간호사">간호사</option>
              <option value="의사">의사</option>
            </Input>
          </Row>

          <Row>
            <Input s={12} label="이름을 입력해주세요" onChange={handleChange} name="doctorName" value={this.state.doctorName}/>
          </Row>

          <Row>
            <Input s={4} type='select' onChange={handleChange} name="doctorYear" value={this.state.doctorYear}>
              <option value="years">년도</option>
            {renderYears()}
            </Input>
            <Input s={4} type='select' onChange={handleChange} name="doctorMonth" value={this.state.doctorMonth}>
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
            <Input s={4} type='select' onChange={handleChange} name="doctorDay" value={this.state.doctorDay}>
              <option value="days">일</option>
              {renderDays()}
            </Input>
          </Row>

          <Row>
            <Input s={12} type='select' onChange={handleChange} name="department" value={this.state.department}>
              <option value="가정의학과">가정의학과</option>
              <option value="내과">내과</option>
              <option value="비뇨기과">비뇨기과</option>
              <option value="산부인과">산부인과</option>
              <option value="성형외과">성형외과</option>
              <option value="소아청소년과">소아청소년과</option>
              <option value="신경과">신경과</option>
              <option value="안과">안과</option>
              <option value="외과">외과</option>
              <option value="이비인후과">이비인후과</option>
              <option value="정신과">정신과</option>
              <option value="정형외과">정형외과</option>
              <option value="치과">치과</option>
              <option value="피부과">피부과</option>
            </Input>

          </Row>

          <Row className="center">
              <Button type="submit" onClick={handleSubmit} waves="light" name="btn_submit">{isFetching ? '로딩중 ...' : '다음'}</Button>
          </Row>
      </div>
    );
  }
}


export default DoctorRegisterBox;
