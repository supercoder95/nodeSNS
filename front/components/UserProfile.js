import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Avatar, Button } from 'antd'

import { logoutAction } from '../reducers/user'

const UserProfile = () => {
    const dispatch = useDispatch()

    const onLogOut = useCallback(() => {
        dispatch(logoutAction())
    }, [])

    return (
        <Card
            actions={[
                <div key="twit">새 글<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followers">팔로워<br />0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>supercoder</Avatar>}
                title="supercoder"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile