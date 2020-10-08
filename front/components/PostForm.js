import { Form, Input, Button } from 'antd'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const PostForm = () => {
    const { imagePath } = useSelector((state) => state.post)
    const onSubmit = useCallback(() => {

    }, [])

    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onsubmit}>
            <Input.TextArea
                value={text}
                onChangeaa={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" stylep={{ float: 'right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePath.map((v) => (
                    <div key={v} style={{ display: 'inline-block' }}>

                    </div>
                ))}
            </div>
        </Form >

    )
};

export default PostForm