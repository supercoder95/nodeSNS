export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'supercoder',
        },

        content: '첫 번째 게시글 #헤시태그 #익스프레스',

        Images: [{
            src: 'https://img2.quasarzone.com/editor/2020/10/23/aa5182ac1e6c8413cf2481a0fedf1643.jpg',
        }, {
            src: 'https://img2.quasarzone.com/editor/2020/10/23/5b73ab27035604d1da049875abb6f361.jpg',
        }, {
            src: 'https://img2.quasarzone.com/editor/2020/10/23/aa5182ac1e6c8413cf2481a0fedf1643.jpg'
        }],

        Comments: [{
            User: {
                nickname: 'hero',
            },
            content: '드디어 댓글 구현',
        }, {
            User: {
                nickname: 'hypercoder',
            },
            content: '졸리다아아앙아ㅏ'
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
    content: '더미데이터',
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