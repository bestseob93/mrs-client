import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Player } from 'video-react';
import Time from 'react-time';

class MedicalRecordComponent extends Component {
  constructor(props) {
    super(props);

    this.renderRecordFiles = this.renderRecordFiles.bind(this);
  }

  renderRecordFiles(datas) {
    if(datas) {
    const mappedRecordFiles = datas.map((item) => (
            <li key={item._id}>
              <div className="collapsible-header">
                <img alt={item._id} className="image-icon" src="../commons/video_camera.png"/>
                의사 {item.doctorName} 진료
                <span style={{float: 'right'}}><Time value={item.recordedTime} format="YYYY/MM/DD HH:mm:ss"/></span>
              </div>
              <div className="collapsible-body" style={{backgroundColor: '#fff'}}>
                <Player>
                  <source src={item.fileName} />
                </Player>
              </div>
            </li>
    ));

    return mappedRecordFiles;
    }
  }

  render() {
    const { renderRecordFiles } = this;
    console.log(this.props);
    return (
      <Row>
        <Col s={12} l={12} m={12}>
          <ul className="collapsible drug-list" data-collapsible="accordion">
            {renderRecordFiles(this.props.myRecords)}
          </ul>
        </Col>
      </Row>
    );
  }
}

export default MedicalRecordComponent;
