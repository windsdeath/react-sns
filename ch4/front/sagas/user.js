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
    while(true){
    yield take(LOG_IN);
    yield delay(2000);
    yield put({
        type: LOG_IN_SUCCESS,
    })}
}

function* watchSignUp(){

}

function* watchHello(){
    yield takeLatest(HELLO_SAGA, function*(){
        yield delay(1000)
        yield put({
            type:'BYE_SAGA'
        })
    })
}

export default function* userSaga (){
    yield all([
        watchLogin(),
        watchHello(),
        watchSignUp()
    ])
}