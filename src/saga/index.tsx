import React from 'react';
import {put, call, takeLatest, takeEvery} from 'redux-saga/effects';
import {
  GET_DATA,
  GET_DATA_DEFAIL,
  GET_DATA_SUCCESS,
  CHANGE_HEART_FOOD,
  CHANGE_HEART_FOOD_DEFAIL,
  CHANGE_HEART_FOOD_SUCCESS,
} from '../reduxs/contains';
import {
  actionGetData,
  actionGetDataDefail,
  actionGetDataSuccess,
  actionChangeHeartFood,
  actionChangeHeartFoodDefail,
  actionChangeHeartFoodSuccess,
} from '../reduxs/actions';

import {getData, changeHeart} from '../reduxs/Apis';

function* fetchData() {
  try {
    const response = yield call(getData);

    yield put({
      type: GET_DATA_SUCCESS,
      payload: response,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_DATA_DEFAIL,
    });
  }
}

// function* fetchChangeHeart({payload}: any) {r
//   // try {
//   //   const response = yield call(changeHeart, {
//   //     id: payload.id,
//   //     dataFood: payload.dataFood,
//   //   });
//   // } catch (e) {
//   //   console.log(e);
//   //   yield put({
//   //     type: CHANGE_HEART_FOOD_DEFAIL,
//   //   });
//   // }
// }

function* rootSaga() {
  yield takeLatest(GET_DATA, fetchData);
  // yield takeLatest(CHANGE_HEART_FOOD, fetchChangeHeart);
}

export default rootSaga;
