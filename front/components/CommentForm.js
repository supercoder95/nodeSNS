import { Button, Form, Input } from 'antd'
import { useCallback } from 'react'
import useInput from '../hooks/useinput'
import ProTypes from 'prop-types'
import { useSelector } from 'react-redux'

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id)
    const [commentText, onChangeCommentText] = useInput('')
    const onsubmitComment = useCallback(() => {
        console.log(post.id, commentText)
    }, [commentText])

    return (
        <Form onFinish={onsubmitComment}>
            <Form.Item style={{ position: 'relative', margin: 0 }}>
                <Input.TextArea 
                value={commentText} 
                onChange={onChangeCommentText} 
                rows={4}
                />
                <Button style={{ position: 'absolute',  right: 0, bottom: -40 }} type="primary" htmlType="submit">공개 댓글 추가</Button>
            </Form.Item>
        </Form>
    )
}

CommentForm.proTypes = {
    post: ProTypes.object.isRequired
}

export default CommentForm