import * as helper from 'helpers/bed.helper';

export const GET_BED_LIST = "GET_BED_LIST";

export const requestGetBedList = () => ({
  type: GET_BED_LIST,
  payload: {
    promise: helper.getBedList()
  }
});

const requests = {
    fetching: false,
    fetched: false,
    error: null
};

const initialState = {
beds: {
    _id: "",
    beduuid: "",
    isChecked: false
},
request: { ...requests }
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
    case `${GET_BED_LIST}_PENDING`:
      return {
        ...state,
        request: { ...pending }
      };
    case `${GET_BED_LIST}_FULFILLED`:
      return {
        beds: {
            _id: payload.data.beds[0]._id,
            beduuid: payload.data.beds[0].beduuid,
            isChecked: payload.data.beds[0].isChecked
        },
        request: { ...fulfilled }
      };
    case `${GET_BED_LIST}_REJECTED`:
      return {
        ...state,
        request: { ...rejected, error: payload }
      };
    default:
      return state;
  }
}
