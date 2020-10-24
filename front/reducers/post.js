export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'supercoder',
        },

        content: '첫 번째 게시글 #헤시태그 #익스프레스',

        Images: [{
            src: 'https://i3.ruliweb.com/img/20/10/24/17559455b8122edbd.jpg',
        }, {
            src: 'https://i2.ruliweb.com/img/20/10/24/175593a071a1031c.png',
        },{
            src: 'https://i1.ruliweb.com/img/20/10/24/175593a299a1031c.jpeg'
        }],

        Comments: [{
            User: {
                nickname: 'hero',
            },
            content: '드디어 댓글 구현이 되어가는군요',
        },{
            User: {
                nickname: 'hypercoder',
            },
            content: '하이퍼코더 짜응'
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