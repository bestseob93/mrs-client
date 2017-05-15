import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLogged } = this.props;
    if(isLogged) {
      return (
        <Navbar brand='MRS' right>
            <NavItem href='/MyPage/MedicalInfo'><span>투여 약/주사 정보</span></NavItem>
            <NavItem href='/MyPage/Doctors'><span>담당 의료진</span></NavItem>
            <NavItem href='/MyPage/MedicalRecord'><span>치료 녹화기록</span></NavItem>
            <NavItem href='#'><span>로그아웃</span></NavItem>
        </Navbar>
      );
    } else {
      return (
        <Navbar brand='MRS' right>
            <NavItem href='#introduceTeam'><span>팀원 소개</span></NavItem>
            <NavItem href='#introduceProduct'><span>제품 소개</span></NavItem>
            <NavItem href="/Login"><span>로그인</span></NavItem>
        </Navbar>
      );
    }
  }
}

export default Header;
