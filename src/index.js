import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App, Home, Login, Register, RegisterSecond, DrugRegister, DoctorRegister, MyPage, MedicalInfo, Doctors, MedicalRecord, AdminPage } from 'containers';

import configStore from 'store/configStore';

import 'styles/Authentication/auth.css';
import 'styles/dropzone.css';
import 'styles/Authentication/mypage.css';
import 'styles/Normalize.css';
import 'styles/Home.css';
import 'styles/admin.css';

const rootElement = document.querySelector('#root');
ReactDOM.render(
  <Provider store={configStore}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="Login" component={Login}/>
          <Route path="Register" component={Register}/>
          <Route path="RegisterSecond" component={RegisterSecond}/>
          <Route path="DrugRegister" component={DrugRegister}/>
          <Route path="DoctorRegister" component={DoctorRegister}/>
          <Route path="MyPage" component={MyPage}>
            <Route path="MedicalInfo" component={MedicalInfo}/>
            <Route path="Doctors" component={Doctors}/>
            <Route path="MedicalRecord" component={MedicalRecord}/>
          </Route>
          <Route path="Admin" component={AdminPage}/>
        </Route>
    </Router>
  </Provider>
  , rootElement);
