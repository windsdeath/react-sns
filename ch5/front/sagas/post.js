import {all,takeLatest,fork,delay,put} from 'redux-saga/effects'
import {ADD_POST_REQUEST,ADD_POST_SUCCESS,ADD_POST_FAILURE,ADD_COMMENT_REQUEST,ADD_COMMENT_SUCCESS,ADD_COMMENT_FAILURE} from '../reducers/post' ;

function addCommentAPI(){

}

function* addComment(action){ //여기에 들어가는 액션은 아래 watchAddComment의 takeLatest 첫번째 인자의 액션
    try{
        yield delay(2000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data:{
                postId:action.data.postId, // 이 곳의 액션은 PostCard의 ADD_COMMENT_REQUEST을 처리하는 부분에서 dispatch로 받을 수도 있음
            }
        });
    } catch (e){
        yield put({
            type:ADD_COMMENT_FAILURE,
            error:e,
        });
    }
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

function addPostAPI(){

}

function* addPost(){
    try{
        yield delay(2000);
        yield put({
            type: ADD_POST_SUCCESS,
        });
    } catch (e){
        yield put({
            type:ADD_POST_FAILURE,
            error:e,
        });
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

export default function* postSaga (){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
    ]);
}