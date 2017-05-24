import * as helper from 'helpers/doctor.helper';

export const REGISTER_DOCTOR = "REGISTER_DOCTOR";

export const doctorRegister = (job, doctorName, doctorFace, birth, department) => ({
  type: REGISTER_DOCTOR,
  payload: {
    promise: helper.requestDoctorRegister(job, doctorName, doctorFace, birth, department)
  }
});

const requests = {
    fetching: false,
    fetched: false,
    error: null
};

const initialState = {
  request: { ...requests }
};

const pending = {fetching: true, fetched: false, error: null};
const fulfilled = {fetching: false, fetched: true, error: null};
const rejected = {fetching: false, fetched: false};

export default function reducer(state = initialState, action) {
  const payload = action.payload;
  switch(action.type) {
    case `${REGISTER_DOCTOR}_PENDING`:
      return {
        request: { ...pending }
      };
    case `${REGISTER_DOCTOR}_FULFILLED`:
      return {
        request: { ...fulfilled }
      };
    case `${REGISTER_DOCTOR}_REJECTED`:
      return {
        request: { ...rejected, error: payload }
      };
    default:
      return state;
  }
}
