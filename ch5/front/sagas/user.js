import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../reducers/user";

function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}

function logInAPI(logInData) {
  return axios.post("/user/logIn", logInData, {
    withCredentials: true // 3번째 인자로 이걸 명시해줘야 쿠키를 주고받을 수 있게 됨.
  });
}

function* logIn(action) {
  try {
    // yield call(logInAPI)
    const result = yield call(logInAPI, action.data);
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

function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function logOutAPI() {
  // axios가 서버에 요청을 보냄
  return axios.post(
    "/user/logOut",
    {},
    {
      withCredentials: true
    }
  );
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS
    });
  } catch (e) {
    // console.log(e);
    // yield put({
    //   type: LOG_OUT_FAILURE,
    //   error: e
    // });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
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

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function loadUserAPI() {
  // axios가 서버에 요청을 보냄
  return axios.get("/user", {
    withCredentials: true
  });
}

function* loadUser() {
  try {
    // yield call(LoadUserAPI)
    const result = yield call(loadUserAPI);
    yield put({
      //put은 dispatch와 동일
      type: LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    //loginAPI 실패시
    // eslint-disable-next-line no-console
    console.log(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchSignUp)
  ]);
}
