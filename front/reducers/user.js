export const initialState = {
    logInLoading: false, //로그인 시도중 
    logInComplete: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false, //로그아웃 시도중
    logOutDone: false,
    logOutFailure: null,
    signUpLoading: false, 
    signUpDone: false,
    signUpFailure: null,
    me: null,
    signUpData: {},
    loginData: {},
}

export const LOG_IN_REQUEST = "LOG_IN_REQUEST"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST"
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS"
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE"

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE"

export const FOLLOW_REQUEST = "FOLLOW_REQUEST"
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS"
export const FOLLOW_FAILURE = "FOLLOW_FAILURE"

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST"
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS"
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE"

const dummyUser = (data) => ({
    ...action.data,
    nickname: '오규찬',
    id: 1,
    Posts: [],
    Followings: [],
    Followers: [],
})

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}

// log-out
export const logoutRequestAction = () => {
    return {
        type: LOG_IN_REQUEST,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            console.log('reducer logIn')
            return {
                ...state,
                logInLoading: true,
                logInError: null,
                logInDone: false,


            }

        case LOG_IN_SUCCESS:
            return {
                ...state,
                logInLoading: false,
                logInDone: true,
                me: dummyUser(action.data),
            }

        case LOG_IN_FAILURE:
            return {
                ...state,
                logInLoading: false,
                logInError: false,

            }

        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
            }

        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            }

        case LOG_OUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
            }

        default:
            return state
    }
}

export default reducer