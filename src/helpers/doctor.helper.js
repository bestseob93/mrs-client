import axios from 'axios';
import { checkStatus } from './checkStatus';
import { browserHistory } from 'react-router';

const ROOT_URL = '/api/v1/doctor';

export function requestDoctorRegister(job, doctorName, doctorFace, birth, department) {
  const ab = Array.prototype.slice.call(doctorFace);
  let formdata = new FormData();
  formdata.append('job', job);
  formdata.append('doctorName', doctorName);
  formdata.append('doctorImage', ab[0]);
  formdata.append('birth', birth);
  formdata.append('department', department);
  return axios.post(`${ROOT_URL}/register`, formdata)
    .then(checkStatus)
    .then(res => {
      browserHistory.push('/');
      return res;
  }).catch(err => {
      throw err;
  });
}
