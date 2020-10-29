import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/index'

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    // if( typeof action === 'function') {
    //     return action(dispatch, getState, )
    // }
    console.log(action)
    return next(action)
}

const configureStore = () => {
    const middleware = [thunkMiddleware, loggerMiddleware]
    const enhancer = process.env.NODE_ENV === 'producion'
        ? compose(applyMiddleware(...middleware)) 
    const store = createStore(reducer, enhancer)
    // store.dispatch({
    //     type: 'CHANGE_NICKNAME',
    //     data: 'hypercoder',
    // })
    return store
}

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
})
export default wrapper