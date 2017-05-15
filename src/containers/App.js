import React, { Component } from 'react';
import { Header, AppFooter } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as auth from 'ducks/auth.duck';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    // get loginData from cookie
    let loginData = getCookie('key');

    // if loginData is undefined, do nothing
    if(typeof loginData === "undefined") return;

    // decode base64 & parse json
    loginData = JSON.parse(atob(loginData));
    // if not logged in, do nothing
    if(!loginData.isLogged) return;

    console.log(loginData);
    this.props.AuthActions.checkStatus().then(
      () => {
        console.log(this.props.valid);
        if(!this.props.valid) {
          loginData = {
            isLogged: false,
            patientName: ''
          };

          document.cookie='key=' + btoa(JSON.stringify(loginData));
        }
      }
    )
  }

  render() {
    const { isLogged } = this.props;
    let re = /(login|register|RegisterSecond)/;
    let isAuth = re.test(this.props.location.pathname);

    return (
      <div className="app-container">
        <header>
          { isAuth ? ( <Header/> ) : ( <Header isLogged={isLogged}/> )}
        </header>
        <main>
          {this.props.children}
          {/* {this.props.location.pathname === '/' ? (<Home url={}/>): this.props.children} */}
        </main>
            {/*<AppFooter/>*/}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      isLogged: state.auth.authStatus.logged,
      valid: state.auth.authStatus.valid
    }
  },
  dispatch => ({
      AuthActions: bindActionCreators({
        checkStatus: auth.requestPatientStatus
      }, dispatch)
  })
)(App);
