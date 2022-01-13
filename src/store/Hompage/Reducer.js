import {
  FETCH_HOME_REQUEST,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE,
} from "./Constants";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
