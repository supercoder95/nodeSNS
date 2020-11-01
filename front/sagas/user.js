import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';

function logInAPI(data) {
    return axios.post('/api/login', data)
}

function logOutAPI() {
    return axios.post('/api/logOut')
}

function* logIn(action) {
    // 요청 실패 대비 try catch로 감싸기
    try {
        // const result = yield call(logInAPI, action.data)
        yield delay(1000)
        yield put({
            type: 'LOG_IN_SUCESS',
            data: action.data,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        })
    }
}


function* logOut() {
    // 요청 실패 대비 try catch로 감싸기
    try {
        // const result = yield call(logOutAPI)
        yield delay(1000)
        yield put({
            type: 'LOG_OUT_SUCESS',
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })
    }
}



function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn)
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut)
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}