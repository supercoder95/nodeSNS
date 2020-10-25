export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'supercoder',
        },

        content: '첫 번째 게시글 #헤시태그 #익스프레스',

        Images: [{
            src: 'https://media.vlpt.us/images/addiescode/post/737f7d13-3db7-4210-a686-d89b1f338388/KakaoTalk_Photo_2020-08-09-14-41-58.jpeg',
        }, {
            src: 'https://media.vlpt.us/images/wooder2050/post/eb9f8886-3466-44c7-bc01-eb73c2c58645/0_ah8yui7nqaz6b-v_.png',
        }, {
            src: 'https://media.vlpt.us/images/wooder2050/post/2ce3d7b3-38a9-494d-a958-9d41377edc68/4%20(2).png'
        }],

        Comments: [{
            User: {
                nickname: 'hero',
            },
            content: '드디어 댓글 구현이 되어가는군요',
        }, {
            User: {
                nickname: 'hypercoder',
            },
            content: '오규찬은 졸리겠다.'
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