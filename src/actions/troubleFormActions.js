import * as types from './actionTypes';

export function featchTrouble() {
  return { type: types.FETCH_TROUBLE };
}

export function featchTroubleList() {
  return { type: types.FETCH_TROUBLE_LIST };
}

export function createTrouble(troubleFormDetails) {
  return { type: types.CREATE_TROUBLE, payload: troubleFormDetails };
}
