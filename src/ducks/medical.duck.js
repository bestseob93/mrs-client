import { registerDrug } from 'helpers/medical.helper';

export const DRUG_REGISTER = "DRUG_REGISTER";

export const requestDrugRegister = (mType, drug) => ({
  type: DRUG_REGISTER,
  payload: {
    promise: registerDrug(mType, drug)
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
    case `${DRUG_REGISTER}_PENDING`:
      return {
        ...state,
        request: { ...pending }
      };
    case `${DRUG_REGISTER}_FULFILLED`:
      return {
        ...state,
        request: { ...fulfilled }
      };
    case `${DRUG_REGISTER}_REJECTED`:
      return {
        ...state,
        request: { ...rejected, error: payload }
      };
    default:
      return state;
  }
}
