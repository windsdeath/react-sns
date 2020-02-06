import {all, fork, put,takeEvery, takeLatest,delay,call} from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS,LOG_IN_FAILURE, SIGN_UP_REQUEST } from '../reducers/user'
// import axios from 'axios';

const HELLO_SAGA = 'HELLO_SAGA';

function* signUpAPI(){
    // return axios.post('/login')
}
function* signUp(){
    try {
        yield call(signUpAPI)
        yield put({ //put은 dispatch와 동일
            type:SIGN_UP_SUCCESS
        })
    } catch (e){ //loginAPI 실패시
        // eslint-disable-next-line no-console
        console.log(e);
        yield put({
            type:SIGN_UP_FAILURE
        })
}
}
function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function* loginAPI(){

}
function* login(){
    try {
        yield call(loginAPI)
        yield put({ //put은 dispatch와 동일
            type:LOG_IN_SUCCESS
        })
    } catch (e){ //loginAPI 실패
        // eslint-disable-next-line no-console
        console.log(e);
        yield put({
            type:LOG_IN_FAILURE
        })
    }
}
function* watchLogin(){
    yield takeEvery(LOG_IN_REQUEST,login);
}

export default function* userSaga (){
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ])
}