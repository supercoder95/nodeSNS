import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

// (이전상태, 액션) => 다음상태
// initialState : 초기상태
const rootRedeucer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action)
            return { ...state, ...action.payload }

        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            }

        case 'LOG_0UT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            }
        default:
            return state
    }
}

export default rootRedeucer