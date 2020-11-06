import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios'
import {
    ADD_POST_SUCCESS, ADD_POST_REQUEST, ADD_POST_FAILURE,
    ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE
} from '../reducers/post';

function addPostAPI(data) {
    return axios.post('/api/addPost', data)
}


function* addPost(action) {
    // 요청 실패 대비 try catch로 감싸기
    try {
        yield delay(1000)
        yield put({
            type: ADD_POST_SUCCESS,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        })
    }
}



function addCommentAPI(data) {
    return axios.Comment(`/api/post/${data.postId}/comment`, data)
}


function* addComment(action) {
    // 요청 실패 대비 try catch로 감싸기
    try {
        yield delay(1000)
        yield put({
            type: ADD_COMMENT_SUCCESS,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        })
    }
}



function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}



export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
    ])
}

