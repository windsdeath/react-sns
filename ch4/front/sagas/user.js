import {all, fork, put,takeEvery, takeLatest,delay, take} from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS,LOG_IN_FAILURE } from '../reducers/user'
import { func } from 'prop-types';
import { tuple } from 'antd/lib/_util/type';

const HELLO_SAGA = 'HELLO_SAGA';

function* loginAPI(){

}

function* login(){
    try {
        yield call(loginAPI)
        yield put({ //put은 dispatch와 동일
            type:LOG_IN_SUCCESS
        })
    } catch (e){ //loginAPI 실패
        console.log(e);
        yield put({
            type:LOG_IN_FAILURE
        })
    }
}

function* watchLogin(){
     yield takeEvery(LOG_IN,login);
    }

function* watchSignUp(){

}

function* hello(){
    yield delay(1000)
    yield put({
        type:'BYE_SAGA'
    })
}

function* watchHello(){
    yield takeLatest(HELLO_SAGA, hello)
    }


export default function* userSaga (){
    yield all([
        fork(watchLogin),
        fork(watchHello),
    ])
}