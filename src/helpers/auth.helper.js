import axios from 'axios';
import { checkStatus } from './checkStatus';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://13.124.26.215:3000/api/v1/patient';

export function loginPatient(patientName, patientBarcode) {

  return axios({
    method: 'POST',
    url: `${ROOT_URL}/signIn`,
    data: {
      patientName,
      patientBarcode
    }
  }).then(checkStatus)
    .then(response => {
      console.log(response);
      localStorage.setItem('mytoken', response.data.token);
  }).catch(err => {
      throw err;
  });
}

export function registerPatient(patientInfo) {

  return axios({
    method: 'POST',
    url: `${ROOT_URL}/register`,
    data: {
      patientName: patientInfo.patientName,
      gender: patientInfo.gender,
      patientTel: patientInfo.patientTel,
      patientBirth: patientInfo.patientBirth,
      address: patientInfo.address,
      bloodType: patientInfo.bloodType
    }
  }).then(checkStatus)
    .then(response => {
      localStorage.setItem('p_id', response.data.patient_id);
      localStorage.setItem('p_uuid', response.data.patient_uuid);
      return response;
  }).catch(error => {
      console.log(error);
      return error;
  });
}

export function getRegisterMoreInfo() {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/moreInfoPage`
  }).then(checkStatus)
    .then(response => {
      console.log(response);
      return response.data;
    }).catch(error => {
      return error;
    });
}

export function postPatientFinal(p_id, b_id, disease, chargeDoctor, medicalCare) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/moreInfo/${p_id}/${b_id}`,
    data: {
      disease: disease,
      doctor_id: chargeDoctor,
      medicalCare_id: medicalCare
    }
  }).then(checkStatus)
    .then((response) => {
      console.log(response);
      browserHistory.push('/');
      return response;
    }).catch((error) => {
      console.log(error);
      return error;
  });
}

export function getLoginStatus() {
  return axios.get(`${ROOT_URL}/getinfo`)
              .then(checkStatus)
              .then((response) => {
                return response;
              }).catch((error) => {
                console.log(error);
                return error;
              });
}

export function getPatientMyPage() {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/myPage`
  }).then(checkStatus)
    .then((response) => {
      return response;
  }).catch((error) => {
      return error;
  });
}
