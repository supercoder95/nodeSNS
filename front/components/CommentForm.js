import ProTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useInput from '../hooks/useinput';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const { addCommentDone } = useSelector((state) => state.post);
    const [commentText, onChangeCommentText, setCommentText] = useInput('');
    useEffect(() => {
        if (addPostDone) {
            setCommentText('');
        }
    }, [addPostDone]);

    const onsubmitComment = useCallback(() => {
        console.log(post.id, commentText);
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: post.id, userId: id },
        });
    }, [commentText, id]);

    return (
        <Form onFinish={onsubmitComment}>
            <Form.Item style={{ position: 'relative', margin: 0 }}>
                <Input.TextArea
                    value={commentText}
                    onChange={onChangeCommentText}
                    rows={4}
                />
                <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">공개 댓글 추가</Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.proTypes = {
    post: ProTypes.object.isRequired,
};

export default CommentForm;
