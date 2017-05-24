import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="background" id="background">
          <div className="background-text">
            <div className="col m6 s10 l6" style={{paddingTop: 200}}>
              <Link to="/Login" className="btn waves-effect waves-light teal darken-2 segment-track-link"><span className="dark-grey-text">&emsp;&emsp;login&emsp;&emsp;</span></Link>
            </div>
          </div>
        </section>

        <section id="introduceTeam">
          <div className="container">
              <div id="card-widgets">
                <div className="row">
                  <div className="center">
                      <h1 className="teal-text text-darken-2">팀원 소개</h1></div>
                  <div className="col s12 m6 l6">
                    <div id="profile-card"  className="card">
                        <div className="card-content">
                          <img src="img/rkd.png" alt="" className="circle responsive-img activator card-profile-image"/>
                          <a className="btn-floating activator btn-move-up waves-effect waves-light darken-2 right">
                            <i className="material-icons">account_circle</i>
                          </a>
                          <span className="card-title activator grey-text text-darken-4">강민호</span>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Hardware Master</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 9920 2704</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>minho5024@gmail.com</p>
                        </div>
                        <div className="card-reveal" style={{display: 'none', transform: 'translateY(0px)'}}>
                          <span className="card-title grey-text text-darken-4">강민호 <i className="material-icons right">close</i></span>
                          <p>스타로 나를 이기려면 10년 더 연습하고 와라.</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Hardware Master</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 9920 2704</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>minho5024@gmail.com</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>cake</i>29th August 1992</p>
                        </div>
                    </div>
                  </div>

                  <div className="col s12 m6 l6">
                    <div id="profile-card" className="card">
                        <div className="card-content">
                          <img src="img/rnjs.jpg" alt="" className="circle responsive-img activator card-profile-image"/>
                            <a className="btn-floating activator btn-move-up waves-effect waves-light darken-2 right">
                              <i className="material-icons">account_circle</i>
                            </a>
                            <span className="card-title activator grey-text text-darken-4">권형은</span>
                            <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Hardware Manager</p>
                            <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 4721 3041</p>
                            <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>floyd9@naver.com</p>
                        </div>
                        <div className="card-reveal" style={{display: 'none', transform: 'translateY(0px)'}}>
                          <span className="card-title grey-text text-darken-4">권형은 <i className="material-icons right">close</i></span>
                          <p>배그로 나를 이기려면 10년 더 연습하고 와라.</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Hardware Manager</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 4721 3041</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>floyd9@naver.com</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>cake</i>7th December 1991</p>
                        </div>
                      </div>
                  </div>

                  <div className="col s12 m6 l6">
                    <div id="profile-card" className="card">
                        <div className="card-content">
                          <img src="img/dl.jpg" alt="" className="circle responsive-img activator card-profile-image"/>
                          <a className="btn-floating activator btn-move-up waves-effect waves-light darken-2 right">
                            <i className="material-icons">account_circle</i>
                          </a>
                          <span className="card-title activator grey-text text-darken-4">이환섭</span>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Server X Web Master</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 2448 7085</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>bestseob93@gmail.com</p>
                        </div>
                        <div className="card-reveal" style={{display: 'none', transform: 'translateY(0px)'}}>
                          <span className="card-title grey-text text-darken-4">이환섭 <i className="material-icons right">close</i></span>
                          <p>똘끼로 나를 이기려면 10년 더 연습하고 와라.</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Server X Web Master</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 2448 7085</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>bestseob93@gmail.com</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>cake</i>14th January 1993</p>
                        </div>
                    </div>
                  </div>

                  <div className="col s12 m6 l6">
                    <div id="profile-card" className="card">
                        <div className="card-content">
                          <img src="img/qkr.jpg" alt="" className="circle responsive-img activator card-profile-image"/>
                          <a className="btn-floating activator btn-move-up waves-effect waves-light darken-2 right">
                            <i className="material-icons">account_circle</i>
                          </a>
                          <span className="card-title activator grey-text text-darken-4">박주만</span>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Web Manager</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 3312 6316</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>qkrwnaks92@gmail.com</p>
                        </div>
                        <div className="card-reveal" style={{display: 'none', transform: 'translateY(0px)'}}>
                          <span className="card-title grey-text text-darken-4">박주만 <i className="material-icons right">close</i></span>
                          <p>농구로 나를 이기려면 10년 더 연습하고 와라.</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Web Manager</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 3312 6316</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>qkrwnaks92@gmail.com</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>cake</i>15th May 1992</p>
                        </div>
                    </div>
                  </div>

                  <div className="col s12 m6 l6">
                    <div id="profile-card" className="card">
                        <div className="card-content">
                          <img src="img/rla.jpg" alt="" className="circle responsive-img activator card-profile-image"/>
                          <a className="btn-floating activator btn-move-up waves-effect waves-light darken-2 right">
                            <i className="material-icons">account_circle</i>
                          </a>
                          <span className="card-title activator grey-text text-darken-4">김택경</span>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Web Manager</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 5104 5364</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>alalap119@naver.com</p>
                        </div>
                        <div className="card-reveal" style={{display: 'none', transform: 'translateY(0px)'}}>
                          <span className="card-title grey-text text-darken-4">김택경 <i className="material-icons right">close</i></span>
                          <p>나의 티모 대위를 이기려면 10년 더 연습하고 와라.</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_identity</i>Web Manager</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>perm_phone_msg</i>+82 10 5104 5364</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>mail</i>alalap119@naver.com</p>
                          <p><i className="material-icons cyan-text text-darken-2" style={{fontSize: '14px'}}>cake</i>14th August 1992</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section id="introduceProduct">
          <div className="container">
            <div className="row">
              <div className="main-description"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
