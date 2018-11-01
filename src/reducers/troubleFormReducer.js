import {
  FETCH_TROUBLE,
  FETCH_TROUBLE_LIST,
  CREATE_TROUBLE
} from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TROUBLE:
      return state;
    case FETCH_TROUBLE_LIST:
      return state;
    case CREATE_TROUBLE:
      return state.concat([action.payload]);
    default:
      return state;
  }
};
