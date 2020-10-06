import { Form, Input } from 'antd'

const PostForm = () => {
    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onsubmit}>
            <Input.TextArea
                value={text}
                onChangeaa={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div></div>
        </Form >

    )
};

export default PostForm