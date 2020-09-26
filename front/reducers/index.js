const initialState = {
    name: 'supercoder',
    age: 26,
    password: 'supercoder8877',
}

const changeNickname = {
    type: 'CHANGE_NICKNAME',

}

const changeNickname = {
    type: 'CHANGE_NICKNAME',
    data: 'hypercoder',
}

// (이전상태, 액션) => 다음상태
// initialState : 초기상태
const rootRedeucer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHAHNGE_NICKNAME':
            return {
                ...state,
                name: action.data,
            }
    }
}

export default rootRedeucer