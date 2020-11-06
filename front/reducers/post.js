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
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_REQUEST'
export const ADD_POST_FAILURE = 'ADD_POST_REQUEST'
// 
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_REQUEST'

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
})

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
})

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
        // ADD_POST
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                addPostLoading: true,
                addPostDone: true,
            }

        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            }
        // ADD_COMMENT
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: true,
            }

        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            }

        default:
            return state
    }
}

export default reducer