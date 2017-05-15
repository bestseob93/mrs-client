import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class DoctorsComponent extends Component {
  render() {
    return (
      <div className="doctor-container center">
      <Row>
        <Col s={12} l={4} m={4}>
          <img src="../commons/hwan.jpeg" alt="" className="circle image-doctor"/>
          <p className="doctor-intro">내과</p>
          <p className="doctor-name">의사 이환섭</p>
          <p className="doctor-phone">010-2448-7085</p>
        </Col>
        <Col s={12} l={4} m={4}>
          <img src="../commons/juman.jpeg" alt="" className="circle image-doctor"/>
          <p className="doctor-intro">내과</p>
          <p className="doctor-name">의사 박주만</p>
          <p className="doctor-phone">010-2448-7085</p>
        </Col>
        <Col s={12} l={4} m={4}>
          <img src="../commons/juman.jpeg" alt="" className="circle image-doctor"/>
          <p className="doctor-intro">내과</p>
          <p className="doctor-name">간호사 박주만</p>
          <p className="doctor-phone">010-3391-4141</p>
        </Col>
      </Row>
      <h1 className="doctor-footer">최선을 다해 치료하겠습니다.</h1>
      </div>
    );
  }
}

export default DoctorsComponent;
