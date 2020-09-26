import React, { useCallback } from 'react'
import { Card, Avatar, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../reducers'
// import Avatar from 'antd/lib/avatar/avatar';

const UserProfile = () => {

    const dispatch = useDispatch()

    const onLogOut = useCallback(() => {
        dispatch(logoutAction())
    }, [])

    return (
        <Card
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">짹짹<br />0</div>,
                <div key="followers">짹짹<br />0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>supercoder</Avatar>}
                title="Today's supercoder"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile