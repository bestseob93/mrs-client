import React, { Component, PropTypes } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';
import Dropzone from 'react-dropzone';

const propTypes = {
  onSubmit: PropTypes.func
};

class DrugRegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drugImageUrl: [],
      drugName: '',
      drugCompany: '',
      drugCompanyInfo: '',
      insuranceCode: '',
      drugShape: '',
      drugIngrident: '',
      drugSave: '',
      drugEffect: '',
      drugAmount: '',
      drugCaution: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onOpenClick = this.onOpenClick.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  onDrop(acceptedFiles) {
    let file = acceptedFiles;
    this.setState({
      drugImageUrl: file
    });
  }

  onOpenClick() {
    this.dropzone.open();
  }

  clearInfo() {
    this.setState({
      drugImageUrl: [],
      drugName: '',
      drugCompany: '',
      drugCompanyInfo: '',
      insuranceCode: '',
      drugShape: '',
      drugIngrident: '',
      drugSave: '',
      drugEffect: '',
      drugAmount: '',
      drugCaution: ''
    });
  }

  handleSubmit() {
    const drug = { ...this.state };
    const { onSubmit } = this.props;
    console.log(drug);
    onSubmit(drug);
  }

  render() {
    const { handleChange,
            onDrop,
            onOpenClick,
            clearInfo,
            handleSubmit } = this;

    return (
        <div className="register-form z-depth-1 grey lighten-4">
          <Row>
            <Col s={12} m={4} l={3}>
              {this.state.drugImageUrl.length > 0 ? <div className="dropzone-hidden">
                                                      <Dropzone ref={(node) => { this.dropzone = node; }}
                                                                onDrop={onDrop}
                                                                multiple={false}>
                                                      </Dropzone>
                                                    </div> :
                                                    <div className="auth-profile center">
                                                      <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={onDrop} multiple={false}>
                                                        <p>약 사진을 드래그 혹은 클릭해주세요.</p>
                                                      </Dropzone>
                                                    </div>}
                {this.state.drugImageUrl.length > 0 ? <div>
                                                        <span onClick={onOpenClick}>다른 약 사진으로 바꾸기</span>
                                                        <div>{this.state.drugImageUrl.map((file) => <img className="circle auth-profile-img"
                                                                                                         key={file.name}
                                                                                                         width="150"
                                                                                                         height="150"
                                                                                                         src={file.preview}
                                                                                                         alt={file.name}
                                                                                                         onClick={onOpenClick}/>)}
                                                        </div>
                                                      </div> : undefined }
            </Col>
            <Col s={12} m={8} l={9}>
                <Input s={12} placeholder="약 이름" name="drugName" onChange={handleChange} value={this.state.drugName}/>
                <Input s={12} placeholder="제조(수입)업체명" name="drugCompany" onChange={handleChange} value={this.state.drugCompany}/>
                <Input s={12} placeholder="제조 수입 정보" name="drugCompanyInfo" onChange={handleChange} value={this.state.drugCompanyInfo}/>
                <Input s={12} placeholder="보험코드" name="insuranceCode" onChange={handleChange} value={this.state.insuranceCode}/>
            </Col>
          </Row>
          <Row>
            <Input s={12} label="외형정보" name="drugShape" onChange={handleChange} value={this.state.drugShape}/>
          </Row>
          <Row>
            <Input s={12} label="성분정보" name="drugIngrident" onChange={handleChange} value={this.state.drugIngrident}/>
          </Row>
          <Row>
            <Input s={12} label="저장방법" name="drugSave" onChange={handleChange} value={this.state.drugSave}/>
          </Row>
          <Row>
            <Input s={12} label="효능효과" name="drugEffect" onChange={handleChange} value={this.state.drugEffect}/>
          </Row>
          <Row>
            <Input s={12} label="용법용량" name="drugAmount" onChange={handleChange} value={this.state.drugAmount}/>
          </Row>
          <Row>
            <Input s={12} label="사용상 주의사항" name="drugCaution" onChange={handleChange} value={this.state.drugCaution}/>
          </Row>
          <Row>
            <Button className="col offset-s3 s2 btn btn-small effect grey" onClick={clearInfo}>취소</Button>
            <Button className="col offset-s2 s2 btn btn-small effect indigo" onClick={handleSubmit}>완료</Button>
          </Row>
      </div>
    );
  }
}

DrugRegisterBox.propTypes = propTypes;

export default DrugRegisterBox;
