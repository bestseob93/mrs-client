import React, { Component } from 'react';
import { Input, Modal } from 'react-materialize';
import { Link } from 'react-router';

class AdminPageComponent extends Component {

  constructor(props) {
      super(props);

      this.renderBedInfos = this.renderBedInfos.bind(this);
      this.renderPatientInfo = this.renderPatientInfo.bind(this);
  }

  componentWillMount() {
    console.log('componentDidMount');
    const { AuthActions, BedActions } = this.props;

    AuthActions.requestPatientList().then(() => {
        BedActions.requestBedList();
    })
  }



  renderBedInfos(bedInfo, patients) {
      console.log(patients);
      let isPatientInBed;
      let patientIndex;
      console.log(bedInfo._id);
        for(let i=0; i<patients.length; i++) {
            console.log('aaaaaa');
            if(bedInfo._id === patients[i].bed) {
                isPatientInBed = true;
                
                console.log('aaaaaa');
                patientIndex = i;
            }
        }
      
      console.log(isPatientInBed);
      console.log(patientIndex);

      if(isPatientInBed) {
        return (
            <Modal id={`${patients[patientIndex]._id}`} className="modal" trigger={
                <div className="btn-container left-align">
                    <a className="waves-effect waves-light bed-background-right" href={`${patients[patientIndex]._id}`}></a>
                </div>}>
                <div className="modal-content">
                    <div className="row"><h4>침상정보</h4></div>
                        <div className="row">
                            <div className="col s9">이름: {patients[patientIndex].patientName}
                                <div>성별 : {patients[patientIndex].gender}</div>
                                <div>전화번호 : {patients[patientIndex].patientTel}</div>
                                <div>생일 : {patients[patientIndex].birth}</div>
                                <div>주소 : {patients[patientIndex].address}</div>
                                <div>혈액형 : {patients[patientIndex].bloodType}</div>
                                <div>병명 : {patients[patientIndex].disease}</div>
                                <div>특이사항</div>
                            </div>
                    </div>
                    </div>

                    <div className="row modal-footer">
                         <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">확인</a>
                     </div>
            </Modal>
      );
    }
  }

  renderPatientInfo(datas) {
    const mappedDatas = datas.map((item) => (
                    <Modal id={`${item._id}`} className="modal" trigger={
                    <div className="btn-container left-align">
                        <a className="waves-effect waves-light bed-background-left" href={`${item._id}`}></a>
                    </div>}>
                    <div className="modal-content">
                        <div className="row"><h4>침상정보</h4></div>
                            <div className="row">
                                <div className="col s9">이름: {item.patientName}
                                    <div>성별 : {item.gender}</div>
                                    <div>전화번호 : {item.patientTel}</div>
                                    <div>생일 : {item.birth}</div>
                                    <div>주소 : {item.address}</div>
                                    <div>혈액형 : {item.bloodType}</div>
                                    <div>병명 : {item.disease}</div>
                                    <div>특이사항</div>
                                </div>
                        </div>
                        </div>

                        <div className="row modal-footer">
                            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">확인</a>
                        </div>
                </Modal>
        ));

    return mappedDatas;
  }

  render() {
    const { renderBedInfos, renderPatientInfo } = this;
    const { bedInfo, patients, isListFetching } = this.props;
    console.log(patients);
    if(isListFetching) {
        return (
            <div>Loading...</div>
        );
    } else {
    return (
      <div>
        <div className="col s2">
            <div className="row center-align">
                <div className="black-text center-align">
                    <p >한성대병원 <br/>입니다.<br/><br/></p>
                </div>
                <div className="white-text admin-nav"><Link to="/DrugRegister" className="waves-effect waves-light btn-large">약품등록</Link></div>
                <div className="white-text admin-nav"><Link to="/Register" className="waves-effect waves-light btn-large">환자등록</Link></div>
                <div className="white-text admin-nav"><Link to="/DoctorRegister" className="waves-effect waves-light btn-large">의사등록</Link></div>
                <div className="white-text admin-nav"><Link to="/Admin" className="waves-effect waves-light btn-large">침상현황</Link></div>
                <div className="white-text admin-nav"><Link to="/PatientList" className="waves-effect waves-light btn-large">환자목록</Link></div>
            </div>
        </div>  {/*<!-- 여기까지 네비게이션 바-->*/}


        {/*침상정보 모달 (반복문 돌릴 것*/}

        {/*<!--여기부터 실제 침상확인 코드-->*/}
        <div className="col s10">
            <div className="row" style={{marginBottom: 0}}>
                <div className="input-field col offset-s1 s5">
                    <Input offset={1} s={5} type='select' label="건물">
                        <option defaultValue="b" disabled>건물을 선택하세요</option>
                        <option value="1">병동 7층</option>
                    </Input>
                </div>
                <div className="input-field col offset-s1 s5">
                  <Input offset={1} s={5} type='select' label="호수">
                      <option defaultValue="a" disabled>건물을 선택하세요</option>
                      <option value="1">715호</option>
                  </Input>
                </div>
            </div>
            <div className="row" style={{marginBottom: 0}}>
                <div className="col offset-s1"></div>
                <div className="center-align"><h5>창 가</h5></div>
            </div>

            <div className="row" style={{marginBottom: 0}}>
                <div className="col offset-s1 s5 black-text center-align">
                    {renderBedInfos(bedInfo, patients)}
                </div>
            </div>
            <div className="row" style={{marginBottom: 0}}>
                <div className="col offset-s1"></div>
                <div className="center-align"><h5>출입문</h5></div>
            </div>
      </div>
    </div>
    );
    }
  }
}

export default AdminPageComponent;
