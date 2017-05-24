import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as auth from 'ducks/auth.duck';

class App extends Component {

  async componentDidMount() {
    const { AuthActions } = this.props;

    await AuthActions.requestGetStatus();
  }

  render() {
    const { isLogged, AuthActions } = this.props;
    let re = /(login|register|RegisterSecond)/;
    let isAuth = re.test(this.props.location.pathname);

    return (
      <div className="app-container">
        <header>
          { isAuth ? ( <Header/> ) : ( <Header isLogged={isLogged} onLogout={AuthActions.requestLogout}/> )}
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
  dispatch => {
    return {
      AuthActions: bindActionCreators({
        requestGetStatus: auth.requestGetPatientStatus,
        requestLogout: auth.requestLogout
      }, dispatch)
    };
  }
)(App);
