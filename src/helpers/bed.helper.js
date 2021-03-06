import axios from 'axios';
import { checkStatus } from './checkStatus';

const ROOT_URL = 'http://13.124.126.30:3000/api/v1/bed';

export function getBedList() {
    return axios({
        method: 'GET',
        url: `${ROOT_URL}/who`
    }).then(checkStatus)
      .then(res => {
          return res;
    }).catch(err => {
        throw err;
    });
}