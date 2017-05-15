import * as helper from 'helpers/auth.helper';

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_REGISTER = "AUTH_REGISTER";
export const PATIENT_INFO = "PATIENT_INFO";
export const POST_PATIENT_INFO = "POST_PATIENT_INFO";
export const GET_PATIENT_STATUS = "GET_PATIENT_STATUS";
export const GET_PATIENT_MY_PAGE = "GET_PATIENT_MY_PAGE";

export const localLogin = (patientName, patientBarcode) => ({
  type: AUTH_LOGIN,
  payload: {
    promise: helper.loginPatient(patientName, patientBarcode)
  }
});

export const localRegister = (patientInfo) => ({
  type: AUTH_REGISTER,
  payload: {
    promise: helper.registerPatient(patientInfo)
  }
});

export const getPatientInfo = () => ({
  type: PATIENT_INFO,
  payload: {
    promise: helper.getRegisterMoreInfo()
  }
});

export const postPatientInfo = (p_id, b_id, disease, chargeDoctor, medicalCare) => ({
  type: POST_PATIENT_INFO,
  payload: {
    promise: helper.postPatientFinal(p_id, b_id, disease, chargeDoctor, medicalCare)
  }
});

export const requestPatientStatus = () => ({
  type: GET_PATIENT_STATUS,
  payload: {
    promise: helper.getLoginStatus()
  }
});

export const requestGetPatientMyPage = () => ({
  type: GET_PATIENT_MY_PAGE,
  payload: {
    promise: helper.getPatientMyPage()
  }
});

const requests = {
    fetching: false,
    fetched: false,
    error: null
};

const patientMores = {
  doctors: [],
  beds: [],
  medicalCare: []
};

const myPageInfos = {
  myDoctor: {},
  myBed: {
    beduuid: "",
    isChecked: false
  },
  myMedicals: []
};

const initialState = {
  request: { ...requests },
  infoRequest: { ...requests },
  postRequest: { ...requests },
  authStatus: {
    logged: false,
    valid: false
  },
  patientMore: { ...patientMores },
  myPageRequest: { ... requests },
  myPageInfo: { ... myPageInfos }
};

const pending = {fetching: true, fetched: false, error: null};
const fulfilled = {fetching: false, fetched: true, error: null};
const rejected = {fetching: false, fetched: false};

export default function reducer(state=initialState, action) {
  const payload = action.payload;
  console.log(payload);
  if(Array.isArray(payload)) {
    console.log(payload[0]);
  }

  switch(action.type) {
    case `${AUTH_LOGIN}_PENDING`:
      return {
        ...state,
        request: { ...pending }
      };
    case `${AUTH_LOGIN}_FULFILLED`:
      return {
        ...state,
        request: { ...fulfilled },
        authStatus: {
          logged: true
        }
      };
    case `${AUTH_LOGIN}_REJECTED`:
      return {
        ...state,
        request: { ...rejected, error: payload },
        authStatus: {
          logged: false
        }
      };
    case `${AUTH_REGISTER}_PENDING`:
      return {
        ...state,
        request: { ...pending },
      };
    case `${AUTH_REGISTER}_FULFILLED`:
      return {
        ...state,
        request: { ...fulfilled }
      };
    case `${AUTH_REGISTER}_REJECTED`:
      return {
        ...state,
        request: { ...rejected, error: payload }
      };
    case `${PATIENT_INFO}_PENDING`:
      return {
        ...state,
        infoRequest: { ...pending }
      };
    case `${PATIENT_INFO}_FULFILLED`:
      return {
        ...state,
        infoRequest: { ...fulfilled },
        patientMore: {
          doctors: payload[0],
          beds: payload[1],
          medicalCare: payload[2]
        }
      };
    case `${PATIENT_INFO}_REJECTED`:
      return {
        ...state,
        infoRequest: { ...rejected, error: payload }
      };
    case `${POST_PATIENT_INFO}_PENDING`:
      return {
        ...state,
        postRequest: { ...pending }
      };
    case `${POST_PATIENT_INFO}_FULFILLED`:
      return {
        ...state,
        postRequest: { ...fulfilled }
      };
    case `${POST_PATIENT_INFO}_REJECTED`:
      return {
        ...state,
        postRequest: { ...rejected, error: payload }
      };
    case `${GET_PATIENT_STATUS}_PENDING`:
      return {
        ...state,
        authStatus: {
          logged: true
        }
      };
    case `${GET_PATIENT_STATUS}_FULFILLED`:
      return {
        ...state,
        authStatus: {
          logged: true,
          valid: true
        }
      };
    case `${GET_PATIENT_STATUS}_REJECTED`:
      return {
        ...state,
        authStatus: {
          logged: false,
          valid: false
        }
      };
    case `${GET_PATIENT_MY_PAGE}_PENDING`:
      return {
        ...state,
        myPageRequest: { ...pending }
      };
    case `${GET_PATIENT_MY_PAGE}_FULFILLED`:
      return {
        ...state,
        myPageRequest: { ...fulfilled },
        myPageInfo: {
          myDoctor: payload.data[0],
          myBed: {
            beduuid: payload.data[1].beduuid,
            isChecked: payload.data[1].isChecked
          },
          myMedicals: payload.data[2]
        }
      };
    case `${GET_PATIENT_MY_PAGE}_REJECTED`:
      return {
        ...state,
        myPageRequest: { ...rejected, error: payload }
      };
    default:
      return state;
  }
}
