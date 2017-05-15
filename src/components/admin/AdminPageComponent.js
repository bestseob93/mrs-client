import React, { Component } from 'react';
import { Input, Modal } from 'react-materialize';
import { Link } from 'react-router';

class AdminPageComponent extends Component {
  render() {
    return (
      <div>
        <div className="col s2 white">
            <div className="row center-align">
                <div className="black-text center-align">
                    <p >이환섭님 <br/>환영합니다.<br/><br/></p>
                </div>
                <div className="white-text"><Link to="/DrugRegister" className="waves-effect waves-light btn-large">약품등록</Link></div>
                <div className="white-text"><Link to="/Register" className="waves-effect waves-light btn-large">환자등록</Link></div>
                <div className="white-text"><Link to="/DoctorRegister" className="waves-effect waves-light btn-large">의사등록</Link></div>
                <div className="white-text"><Link to="/Admin" className="waves-effect waves-light btn-large">침상현황</Link></div>

            </div>
        </div>  {/*<!-- 여기까지 네비게이션 바-->*/}


        {/*침상정보 모달 (반복문 돌릴 것*/}

        {/*<!--여기부터 실제 침상확인 코드-->*/}
        <div className="col s10">
            <div className="row" style={{marginBottom: 0}}>
                <div className="input-field col offset-s1 s5">
                    <Input offset={1} s={5} type='select' label="건물">
                        <option value="" disabled selected>건물을 선택하세요</option>
                        <option value="1">1층</option>
                        <option value="2">2층</option>
                        <option value="3">3층</option>
                    </Input>
                </div>
                <div className="input-field col offset-s1 s5">
                  <Input offset={1} s={5} type='select' label="호수">
                      <option value="" disabled selected>건물을 선택하세요</option>
                      <option value="1">101호</option>
                      <option value="2">102호</option>
                      <option value="3">103호</option>
                  </Input>
                </div>
            </div>
            <div className="row" style={{marginBottom: 0}}>
                <div className="col offset-s1"></div>
                <div className="center-align"><h5>창 가</h5></div>
            </div>

            <div className="row" style={{marginBottom: 0}}>
                <div className="col offset-s1 s5 black-text center-align">
                  <Modal id="bed1" className="modal" trigger={
                      <div className="btn-container left-align">
                        <a className="waves-effect waves-light bed-background-left" href="#bed1"></a>
                      </div>}>
                      <div className="modal-content">
                          <div className="row"><h4>침상정보</h4></div>
                          <div className="row">
                              <div className="col s9">이름:
                                  <div>성별 : </div>
                                  <div>전화번호 : </div>
                                  <div>생일 : </div>
                                  <div>주소 : </div>
                                  <div>혈액형 : </div>
                                  <div>담당의사 : </div>
                                  <div>병명 : </div>
                                  <div>투여중 : </div>
                                  <div>특이사항</div>
                              </div>
                              <div className="col s3">환자 사진</div>
                              <div><img title="환자 사진" src="##" alt="환자 사진" width="20%"/></div>
                          </div>
                      </div>

                      <div className="row modal-footer">
                          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">확인</a>
                      </div>
                  </Modal>
                  <Modal id="bed1" className="modal" trigger={
                      <div className="btn-container left-align">
                        <a className="waves-effect waves-light bed-background-left" href="#bed1"></a>
                      </div>}>
                      <div className="modal-content">
                          <div className="row"><h4>침상정보</h4></div>
                          <div className="row">
                              <div className="col s9">이름:
                                  <div>성별 : </div>
                                  <div>전화번호 : </div>
                                  <div>생일 : </div>
                                  <div>주소 : </div>
                                  <div>혈액형 : </div>
                                  <div>담당의사 : </div>
                                  <div>병명 : </div>
                                  <div>투여중 : </div>
                                  <div>특이사항</div>
                              </div>
                              <div className="col s3">환자 사진</div>
                              <div><img title="환자 사진" src="##" alt="환자 사진" width="20%"/></div>
                          </div>
                      </div>

                      <div className="row modal-footer">
                          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">확인</a>
                      </div>
                  </Modal>
                  <Modal id="bed1" className="modal" trigger={
                      <div className="btn-container left-align">
                        <a className="waves-effect waves-light bed-background-left" href="#bed1"></a>
                      </div>}>
                      <div className="modal-content">
                          <div className="row"><h4>침상정보</h4></div>
                          <div className="row">
                              <div className="col s9">이름:
                                  <div>성별 : </div>
                                  <div>전화번호 : </div>
                                  <div>생일 : </div>
                                  <div>주소 : </div>
                                  <div>혈액형 : </div>
                                  <div>담당의사 : </div>
                                  <div>병명 : </div>
                                  <div>투여중 : </div>
                                  <div>특이사항</div>
                              </div>
                              <div className="col s3">환자 사진</div>
                              <div><img title="환자 사진" src="##" alt="환자 사진" width="20%"/></div>
                          </div>
                      </div>

                      <div className="row modal-footer">
                          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">확인</a>
                      </div>
                  </Modal>
                </div>
                <div className="col offset-s1 s5 black-text center-align">
                  <Modal id="bed1" className="modal" trigger={
                      <div className="btn-container right-align">
                        <a className="waves-effect waves-light bed-background-right" href="#bed1"></a>
                      </div>}>
                      <div className="modal-content">
                          <div className="row"><h4>침상정보</h4></div>
                          <div className="row">
                              <div className="col s9">이름:
                                  <div>성별 : </div>
                                  <div>전화번호 : </div>
                                  <div>생일 : </div>
                                  <div>주소 : </div>
                                  <div>혈액형 : </div>
                                  <div>담당의사 : </div>
                                  <div>병명 : </div>
                                  <div>투여중 : </div>
                                  <div>특이사항</div>
                              </div>
                              <div className="col s3">환자 사진</div>
                              <div><img title="환자 사진" src="##" alt="환자 사진" width="20%"/></div>
                          </div>
                      </div>

                      <div className="row modal-footer">
                          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">확인</a>
                      </div>
                  </Modal>
                  <Modal id="bed1" className="modal" trigger={
                      <div className="btn-container right-align">
                        <a className="waves-effect waves-light bed-background-right" href="#bed1"></a>
                      </div>}>
                      <div className="modal-content">
                          <div className="row"><h4>침상정보</h4></div>
                          <div className="row">
                              <div className="col s9">이름:
                                  <div>성별 : </div>
                                  <div>전화번호 : </div>
                                  <div>생일 : </div>
                                  <div>주소 : </div>
                                  <div>혈액형 : </div>
                                  <div>담당의사 : </div>
                                  <div>병명 : </div>
                                  <div>투여중 : </div>
                                  <div>특이사항</div>
                              </div>
                              <div className="col s3">환자 사진</div>
                              <div><img title="환자 사진" src="##" alt="환자 사진" width="20%"/></div>
                          </div>
                      </div>

                      <div className="row modal-footer">
                          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">확인</a>
                      </div>
                  </Modal>
                  <Modal id="bed1" className="modal" trigger={
                      <div className="btn-container right-align">
                        <a className="waves-effect waves-light bed-background-right" href="#bed1"></a>
                      </div>}>
                      <div className="modal-content">
                          <div className="row"><h4>침상정보</h4></div>
                          <div className="row">
                              <div className="col s9">이름:
                                  <div>성별 : </div>
                                  <div>전화번호 : </div>
                                  <div>생일 : </div>
                                  <div>주소 : </div>
                                  <div>혈액형 : </div>
                                  <div>담당의사 : </div>
                                  <div>병명 : </div>
                                  <div>투여중 : </div>
                                  <div>특이사항</div>
                              </div>
                              <div className="col s3">환자 사진</div>
                              <div><img title="환자 사진" src="##" alt="환자 사진" width="20%"/></div>
                          </div>
                      </div>

                      <div className="row modal-footer">
                          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">확인</a>
                      </div>
                  </Modal>
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

export default AdminPageComponent;
