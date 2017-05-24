import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class MyPageComponent extends Component {
  render() {
    const { beduuid, myInfo } = this.props;
    console.log(myInfo);
    const URL = "http://13.124.126.30:3000/commons";
    return (
      <div className="mypage-container">

        <Row>
          <Col s={12} l={12} m={12} className="center">
            <div className="card" style={{width: '60%', margin: '0 auto'}}>
              <div className="card-image">
                <img className="drug-image" src={myInfo.gender === "Male" ? `${URL}/profile_icon.png` : `${URL}/female_icon.png`} alt={myInfo.patientName}/>
              </div>
              <div className="card-content">
              <p style={{marginBottom: 10, fontWeight: 500}}>
                 {myInfo.patientName}님
              </p>
              <p>
                 {myInfo.gender === "Male" ? "남성" : "여성"}
              </p>
            </div>
            <div className="card-tabs">
              <ul className="tabs" ref={(myTabs) => {this.myTabs = myTabs}}>
                <li className="tab"><a href="#patientBarcode">환자번호</a></li>
                <li className="tab"><a href="#disease">질병정보</a></li>
                <li className="tab"><a href="#patientInfo">개인정보</a></li>
              </ul>
            </div>
            <div className="card-content grey lighten-4">
              <div id="patientBarcode">{myInfo.patientBarcode}</div>
              <div id="disease">{myInfo.disease}</div>
              <div id="patientInfo">
                <p style={{marginBottom: 10}}>전화번호: {myInfo.patientTel}</p>
                <p style={{marginBottom: 10}}>주소: {myInfo.address}</p>
                <p style={{marginBottom: 10}}>혈액형: {myInfo.bloodType}형</p>
                <p>생년월일: {myInfo.birth}</p>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyPageComponent;