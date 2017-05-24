import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize';


class RegisterSecondBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disease: '',
      chargeDoctor: '',
      beds: '',
      medicalCare: []
    };

    this.handleDisease = this.handleDisease.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.renderDoctors = this.renderDoctors.bind(this);
    this.renderBeds = this.renderBeds.bind(this);
    this.renderMedicals = this.renderMedicals.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentWillMount() {
    console.log('componentDidMount');
    const { AuthActions } = this.props;

    await AuthActions.requestPatientInfos();
  }

  handleDisease(e) {
    this.setState({disease: e.target.value })
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleOptions(e) {
    let options = e.target.options;
    let value = [];
    for(let i = 0; i < options.length; i++) {
      if(options[i].selected) {
        value.push(options[i].value);
      }
    }

    this.setState({
      medicalCare: value
    });
  }

  renderDoctors(doctorsData) {
    const mappedDoctor = doctorsData.map((item) => (
      <option key={item._id} value={item._id}>{item.department + item.doctorName}</option>
    ));

    console.log(doctorsData);

    return mappedDoctor;
  }

  renderBeds(bedsData) {
    const mappedBed = bedsData.map((item) => (
      <option key={item._id} value={item._id}>{item.beduuid}</option>
    ));

    console.log(bedsData);

    return mappedBed;
  }

  renderMedicals(medicalData) {
    const mappedMedical = medicalData.map((item) => (
      <option key={item._id} value={item._id}>{item.drug.drugName}</option>
    ));

    return mappedMedical;
  }

  handleSubmit() {
    const { AuthActions } = this.props;
    const { disease, chargeDoctor, beds, medicalCare } = this.state;
    const p_id = localStorage.getItem('p_id');
    console.log('handlesubmit testing');
    console.log(beds, disease, chargeDoctor);
    AuthActions.postPatientInfos(p_id, beds, disease, chargeDoctor, medicalCare);
  }

  render() {
    const { handleDisease,
            handleChange,
            handleOptions,
            renderDoctors,
            renderBeds,
            renderMedicals,
            handleSubmit
          } = this;

    const { patientSelects, isFetching } = this.props;
    console.log(this.props);


    if(isFetching) {
      (
      <div className="center" style={{verticalAlign: 'middle'}}>
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
      </div>
      );
    } else {
        const doctorsData = patientSelects.doctors;
        const bedsData = patientSelects.beds;
        const medicalData = patientSelects.medicalCare;

      return (
        <div className="z-depth-1 grey lighten-4 register-form">
          <Row>
            <Input s={12} label="환자 질병 상태" onChange={handleDisease} name="disease" value={this.state.disease}/>
          </Row>

          <Row>
              <Input s={12} type='select' label="담당 의사" onChange={handleChange} name="chargeDoctor" value={this.state.chargeDoctor}>
                <option value="doctors">담당 의료진 선택</option>
                {renderDoctors(doctorsData)}
              </Input>
          </Row>

          <Row>
              <Input s={12} type='select' label="침상" onChange={handleChange} name="beds" value={this.state.beds}>
                <option value="beds">가용 침상 현황</option>
                {renderBeds(bedsData)}
              </Input>
          </Row>

          <Row>
              <Input s={12} type='select' label="약제" multiple onChange={handleOptions} name="medicalCare" value={this.state.medicalCare}>
                <option value="aids">에이즈</option>
                {renderMedicals(medicalData)}
              </Input>
          </Row>

          <Row className="center">
              <Button type="submit" waves="light" onClick={handleSubmit} name="btn_submit">작성완료</Button>
          </Row>
        </div>
      );
    }
  }
}


export default RegisterSecondBox;
