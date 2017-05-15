import axios from 'axios';
import { checkStatus } from './checkStatus';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://13.124.26.215:3000/api/v1/doctor';

export function requestDoctorRegister(job, doctorName, birth, department) {

  return axios({
    method: 'POST',
    url: `${ROOT_URL}/register`,
    data: {
      job: job,
      doctorName: doctorName,
      birth: birth,
      department: department
    }
  }).then(checkStatus)
    .then(res => {
      browserHistory.push('/');
      return res;
  }).catch(err => {
      throw err;
  });
}
