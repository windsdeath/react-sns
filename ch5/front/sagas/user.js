import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../reducers/user";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3065/api/";

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function loginAPI(loginData) {
  return axios.post("/user/login", loginData, {
    withCredentials: true // 3번째 인자로 이걸 명시해줘야 쿠키를 주고받을 수 있게 됨.
  });
}

function* login(action) {
  try {
    // yield call(loginAPI)
    const result = yield call(loginAPI, action.data);
    yield put({
      //put은 dispatch와 동일
      type: LOG_IN_SUCCESS,
      data: result.data
    });
  } catch (e) {
    //loginAPI 실패
    // eslint-disable-next-line no-console
    console.log(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function signUpAPI(signUpData) {
  // axios가 서버에 요청을 보냄
  return axios.post("/user", signUpData);
}

function* signUp(action) {
  try {
    // yield call(signUpAPI)
    yield call(signUpAPI, action.data);
    yield put({
      //put은 dispatch와 동일
      type: SIGN_UP_SUCCESS
    });
  } catch (e) {
    //loginAPI 실패시
    // eslint-disable-next-line no-console
    console.log(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
