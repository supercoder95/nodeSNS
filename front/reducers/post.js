export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'supercoder',
        },
        content: '첫 번째 게시글 #헤시태그 #익스프레스',
        Images: [{
            src: 'https://www.naver.com',
        }, {
            src: 'https://www.naver.com',
        }, {
            src: 'https://www.naver.com',
        }],
        Comments: [{
            User: {
                nickname: 'hero',
            },
            content: '와 얼른 사고 싶어요',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: 'supercoder',
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state
    }
}

export default reducer