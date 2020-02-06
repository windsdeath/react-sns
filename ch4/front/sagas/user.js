import {all, fork, put, takeLatest, take} from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS,LOG_IN_FAILURE } from '../reducers/user'

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
    yield takeLatest(LOG_IN, login)
}

function* hello(){
    try{
        yield put({
            type:'HELLO_TWO'
        });
        console.log('hello')
    } catch(e){
        console.error(e);
    }
}

function* helloSaga(){
    console.log('before saga');
    while(true){
        yield take(HELLO_SAGA);
        console.log('hello saga');
}}

export default function* userSaga (){
    yield helloSaga();
}