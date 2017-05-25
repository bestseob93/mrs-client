import axios from 'axios';
import { checkStatus } from './checkStatus';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://13.124.126.30:3000/api/v1/medicalcare';

export function registerDrug(mType, drug) {
  const ab = Array.prototype.slice.call(drug.drugImageUrl);
  let formdata = new FormData();

  console.log(ab[0]);
  formdata.append('medicalType', mType);
  formdata.append('drugName', drug.drugName);
  formdata.append('drugCompany', drug.drugCompany);
  formdata.append('drugCompanyInfo', drug.drugCompanyInfo);
  formdata.append('insuranceCode', drug.insuranceCode);
  formdata.append('drugShape', drug.drugShape);
  formdata.append('drugIngrident', drug.drugIngrident);
  formdata.append('drugSave', drug.drugSave);
  formdata.append('drugEffect', drug.drugEffect);
  formdata.append('drugAmount', drug.drugAmount);
  formdata.append('drugCaution', drug.drugCaution);
  formdata.append('medicalImage', ab[0]);
  console.log(formdata);
  return axios.post(`${ROOT_URL}/drugRegister`, formdata).then(checkStatus)
    .then(response => {
      browserHistory.push('/');
  }).catch(err => {
      throw err;
  });
}
