import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Avatar, Button } from 'antd'

import { logoutRequestAction } from '../reducers/user'

const UserProfile = () => {
    const dispatch = useDispatch()
    const { me, logOutLodding } = useSelector((state => state.user))

    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction())
    }, [])

    return (
        <Card
            actions={[
                <div key="twit">새 글<br />{me.Posts.length}</div>,
                <div key="followings">팔로잉<br />{me.following.length}</div>,
                <div key="followers">팔로워<br />{me.followers.length}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLodding}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile