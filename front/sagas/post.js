import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios'

function addPostAPI(data) {
    return axios.post('/api/addPost', data)
}


function* addPost(action) {
    // 요청 실패 대비 try catch로 감싸기
    try {
        yield delay(1000)
        yield put({
            type: 'ADD_POST_SUCESS',
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        })
    }
}


function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost)
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost)
    ])
}