import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class DoctorsComponent extends Component {
  render() {
    const { myDoctors } = this.props;
    return (
      <div className="doctor-container center">
      <Row>
        <Col s={12} l={4} m={4}>
          <img src="../commons/hwan.jpeg" alt="" className="circle image-doctor"/>
          <p className="doctor-intro">힘찬병원</p>
          <p className="doctor-name">원장 강민호</p>
          <p className="doctor-phone">010-9682-3215</p>
        </Col>
        <Col s={12} l={4} m={4}>
          <img src="../commons/juman.jpeg" alt="" className="circle image-doctor"/>
          <p className="doctor-intro">힘찬병원 {myDoctors.department}</p>
          <p className="doctor-name">{myDoctors.job + " " + myDoctors.doctorName}</p>
          <p className="doctor-phone">010-2448-7085</p>
        </Col>
        <Col s={12} l={4} m={4}>
          <img src="../commons/juman.jpeg" alt="" className="circle image-doctor"/>
          <p className="doctor-intro">힘찬병원</p>
          <p className="doctor-name">부원장 김택경</p>
          <p className="doctor-phone">010-3391-4141</p>
        </Col>
      </Row>
      <h1 className="doctor-footer">최선을 다해 치료하겠습니다.</h1>
      </div>
    );
  }
}

export default DoctorsComponent;
