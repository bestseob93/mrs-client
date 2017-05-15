import React, { Component } from 'react';
import { Row, Col, Icon } from 'react-materialize';

class MedicalInfoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreClicked: true
    };

    this.toggleMoreClick = this.toggleMoreClick.bind(this);
  }

  toggleMoreClick() {
    this.setState({
      moreClicked: !this.state.moreClicked
    });
  }

  render() {
    return (
      <Row>
        <Col s={12} l={12} m={12} className="center patient-info">
          <p>침상번호: 3301</p>
          <span><strong className="patient-name">강민호</strong>님의 쾌유를 위하여 최선을 다하겠습니다.</span>
        </Col>
        <Col s={12} l={12} m={12}>
          <ul className="collapsible drug-list" data-collapsible="accordion">
            <li>
              <div className="collapsible-header"><img className="image-icon" src="../commons/pill.png"/>15시 13분 20초 투여 (파리에트 정, 가스모틴 정)</div>
              <div className="collapsible-body">

                <div className="card">
                  <div className="card-image">
                    <img className="drug-image" src="../commons/pariet.png"/>
                    <span className="card-title">파리에트정 10mg</span>
                  </div>
                  <div className="card-content">
                    <p>
                       성상: 담황색의 원형 필름코팅정제<br/>
                       제형: 필름코팅정<br/>
                       모양: 원형<br/>
                       색상: 노랑<br/>
                    </p>

                    <p className="red-text right more-button" onClick={this.toggleMoreClick}>{this.state.moreClicked ? '더 보기' : '닫기'}</p>
                  </div>
                  <div className={`card-tabs ${this.state.moreClicked ? 'hide' :''}`}>
                    <ul className="tabs">
                      <li className="tab"><a className="active" href="#test4">효능</a></li>
                      <li className="tab"><a href="#test5">용법용량</a></li>
                      <li className="tab"><a href="#test6">저장방법</a></li>
                      <li className="tab"><a href="#test8">주의사항</a></li>
                      <li className="tab"><a href="#test7">더 보기</a></li>
                    </ul>
                  </div>
                  <div className={`card-content grey lighten-4 ${this.state.moreClicked ? 'hide' :''}`}>
                    <div id="test4">[허가사항변경(2011년 재평가), 의약품관리과-6843, 2012.12.31)]
                    (정제)
                    - 위궤양, 십이지장궤양
                    - 미란성 또는 궤양성 위식도역류질환
                    - 위식도역류질환의 증상 완화
                    - 위식도역류질환의 장기간 유지요법
                    - 헬리코박터필로리에 감염된 소화기 궤양 환자에 대한 항생제 병용요법
                    - 졸링거 엘리슨 증후군
                    [네이버 지식백과] 파리에트정10mg [Pariet Tab. 10mg] (의약품 사전, 약학정보원)</div>
                    <div id="test5">1일 1회 10 mg을 투여</div>
                    <div id="test6">기밀용기 실온(1-30℃)보관</div>
                    <div id="test8">[허가사항변경(안전성 정보처리), 의약품안전평가과-3980, 2016.07.25.]

                      1. 다음 환자에는 투여하지 말 것.
                      1) 이 약, 이 약의 구성성분 또는 벤즈이미다졸류에 과민반응 및 그 병력이 있는 환자
                      2) 페니실린계 항생제에 과민반응 환자(헬리코박터필로리 박멸을 위해 아목시실린과 병용요법시)
                      3) 마크로라이드계 항생제 과민반응 환자(헬리코박터필로리 박멸을 위해 클래리트로마이신과 병용시에 한함.)
                      4) 테르페나딘, 시사프리드, 피모지드, 아스테미졸을 투여 받고 있는 환자(헬리코박터필로리 박멸을 위해 클래리트로마이신과 병용시에 한함) (상호작용항 참조)
                      5) 아타자나비르를 투여중인 환자
                      6) 임부 및 수유부
                      7) 릴피비린을 투여중인 환자 (상호작용항 참조)
                      [네이버 지식백과] 파리에트정10mg [Pariet Tab. 10mg] (의약품 사전, 약학정보원)

                    </div>
                    <div id="test7">더 보기</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header"><Icon>place</Icon>Second</div>
              <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li>
              <div className="collapsible-header"><Icon>whatshot</Icon>Third</div>
              <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default MedicalInfoComponent;
