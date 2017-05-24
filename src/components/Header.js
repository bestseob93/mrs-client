import React, { Component } from 'react';

class Header extends Component {

  render() {
    const { isLogged } = this.props;
    console.log(isLogged);
    let navItems;
    if(isLogged) {
      navItems = (
        <div className="nav-wrapper teal">
          <a href="/" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/MyPage/MedicalInfo"><span>투여 약/주사 정보</span></a></li>
            <li><a href="/MyPage/Doctors"><span>담당 의료진</span></a></li>
            <li><a href="/MyPage/MedicalRecord"><span>치료 녹화기록</span></a></li>
            <li><a href="/" onClick={this.props.onLogout}><span>로그아웃</span></a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="/MyPage/MedicalInfo"><span>투여 약/주사 정보</span></a></li>
            <li><a href="/MyPage/Doctors"><span>담당 의료진</span></a></li>
            <li><a href="/MyPage/MedicalRecord"><span>치료 녹화기록</span></a></li>
            <li><a href="/" onClick={this.props.onLogout}><span>로그아웃</span></a></li>
          </ul>
        </div>
      );
    } else {
      navItems = (
        <div className="nav-wrapper teal">
          <a href="/" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/"><span>팀원 소개</span></a></li>
            <li><a href="/MyPage/Doctors"><span>제품 소개</span></a></li>
            <li><a href="/Login"><span>로그인</span></a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="/"><span>팀원 소개</span></a></li>
            <li><a href="/MyPage/Doctors"><span>제품 소개</span></a></li>
            <li><a href="/Login"><span>로그인</span></a></li>
          </ul>
        </div>
      );
    }
    return (
        <nav>
          {navItems}
        </nav>
    );
  }
}

export default Header;
