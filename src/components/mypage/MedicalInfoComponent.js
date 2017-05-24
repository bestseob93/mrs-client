import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Time from 'react-time';

class MedicalInfoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreClicked: true,
      tabId: ''
    };

    this.toggleMoreClick = this.toggleMoreClick.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
  }

  toggleMoreClick() {
    this.setState({
      moreClicked: !this.state.moreClicked
    });
  }

  clickDrugDetail(barcode) {
    this.setState({
      tabId: barcode
    });
  }

  renderListItems(datas) {
    const mappedItem = datas.map((item) => (
      <li key={item._id}>
        <div className="collapsible-header"><img alt="약" className="image-icon" src="../commons/pill.png"/>
        {item.drug.drugName} <span style={{float: 'right'}}><Time value={item.date.edited} format="YYYY/MM/DD HH:mm:ss"/></span>
        </div>
        <div className="collapsible-body" style={{backgroundColor: '#fff'}}>
          {console.log(item.drug.drugShape)}

          <div className="card">
            <div className="card-image">
              <img className="drug-image" src={item.drug.drugImageUrl}alt={item.drug.drugName}/>
              <span className="card-title">{item.drug.drugName}</span>
            </div>
            <div className="card-content">
              <p>
                 {item.drug.drugShape}
              </p>

              <p className="red-text right more-button" onClick={this.toggleMoreClick}>{this.state.moreClicked ? '더 보기' : '닫기'}</p>
            </div>
            <div className={`card-tabs ${this.state.moreClicked ? 'hide' :''}`}>
              <ul className="tabs" ref={(myTabs) => {this.myTabs = myTabs}}>
                <li className="tab"><a onClick={() => this.clickDrugDetail(`${item.drug.drugBarcode}drugEffect`)} ref="drugEffect" className={this.state.tabId === item.drug.drugBarcode + 'drugEffect' ? 'active' : ''} href={`#${item.drug.drugBarcode}drugEffect`}>효능</a></li>
                <li className="tab"><a onClick={() => this.clickDrugDetail(`${item.drug.drugBarcode}drugAmount`)} ref="drugAmount"  className={this.state.tabId === item.drug.drugBarcode + 'drugAmount' ? 'active' : ''} href={`#${item.drug.drugBarcode}drugAmount`}>용법용량</a></li>
                <li className="tab"><a onClick={() => this.clickDrugDetail(`${item.drug.drugBarcode}drugSave`)} ref="drugSave"  className={this.state.tabId === item.drug.drugBarcode + 'drugSave' ? 'active' : ''} href={`#${item.drug.drugBarcode}drugSave`}>저장방법</a></li>
                <li className="tab"><a onClick={() => this.clickDrugDetail(`${item.drug.drugBarcode}drugCaution`)} ref="drugCaution" className={this.state.tabId === item.drug.drugBarcode + 'drugCaution' ? 'active' : ''} href={`#${item.drug.drugBarcode}drugCaution`}>주의사항</a></li>
                <li className="tab"><a onClick={() => this.clickDrugDetail(`${item.drug.drugBarcode}drugMore`)} ref="drugMore" className={this.state.tabId === item.drug.drugBarcode + 'drugMore' ? 'active' : ''} href={`#${item.drug.drugBarcode}drugMore`}>더 보기</a></li>
              </ul>
            </div>
            <div className={`card-content grey lighten-4 ${this.state.moreClicked ? 'hide' :''}`}>
              <div id={`${item.drug.drugBarcode}drugEffect`} className={this.state.tabId === item.drug.drugBarcode + 'drugEffect' ? 'active' : 'hide'}>{item.drug.drugEffect}</div>
              <div id={`${item.drug.drugBarcode}drugAmount`} className={this.state.tabId === item.drug.drugBarcode + 'drugAmount' ? 'active' : 'hide'}>{item.drug.drugAmount}</div>
              <div id={`${item.drug.drugBarcode}drugSave`} className={this.state.tabId === item.drug.drugBarcode + 'drugSave' ? 'active' : 'hide'}>{item.drug.drugSave}</div>
              <div id={`${item.drug.drugBarcode}drugCaution`} className={this.state.tabId === item.drug.drugBarcode + 'drugCaution' ? 'active' : 'hide'}>{item.drug.drugCaution}</div>
              <div id={`${item.drug.drugBarcode}drugMore`} className={this.state.tabId === item.drug.drugBarcode + 'drugMore' ? 'active' : 'hide'}>더 보기</div>
            </div>
          </div>
        </div>
      </li>
    ));

    return mappedItem;
  }

  render() {
    const { renderListItems } = this;
    console.log(this.props);
    return (
      <Row>
        <Col s={12} l={12} m={12}>
          <ul className="collapsible drug-list" data-collapsible="accordion">
            {renderListItems(this.props.myMedical)}
          </ul>
        </Col>
      </Row>
    );
  }
}

export default MedicalInfoComponent;
