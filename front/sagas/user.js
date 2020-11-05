import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios'
import { 
    LOG_IN_SUCESS, LOG_IN_REQUEST, LOG_IN_FAILURE,
    LOG_OUT_SUCESS, LOG_OUT_REQUEST, LOG_OUT_FAILURE, 
    SIGN_UP_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILURE,

} from '../reducers/user'

function logInAPI(data) {
    return axios.post('/api/login', data)
}

function logOutAPI() {
    return axios.post('/api/logOut')
}

function signUpAPI() {
    return axios.post('/api/signUp')
}

function* logIn(action) {
    // 요청 실패 대비 try catch로 감싸기
    try {
        // const result = yield call(logInAPI, action.data)
        yield delay(1000)
        yield put({
            type: LOG_IN_SUCESS,
            data: action.data,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}


function* logOut() {
    // 요청 실패 대비 try catch로 감싸기
    try {
        // const result = yield call(logOutAPI)
        yield delay(1000)
        yield put({
            type: LOG_OUT_SUCESS,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        })
    }
}

function* signUp() {
    // 요청 실패 대비 try catch로 감싸기
    try {
        // const result = yield call(signUpAPI)
        yield delay(1000)
        yield put({
            type: SIGN_UP_SUCCESS,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}



function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchSignUp() {
    yield takeLatest(SIGN_IN_REQUEST, signUp)
}



export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}