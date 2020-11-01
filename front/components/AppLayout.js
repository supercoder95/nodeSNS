import React from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import LoginForm from '../components/LoginForm'
import UserProfile from '../components/UserProfile'

import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .ant-col:first-chlid {
        padding-left: 0 !important;
    }
    
    .ant-col:last-chlid {
        padding-right: 0 !important;
    }
`

const SearchInput = styled(Input.Search)`
    margin: 0, auto
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

    return (
        <div>
            <Global />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['3']}>
                <Menu.Item>
                    <Link href="/"><a>홈</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={18}>
                    {children}
                </Col>
            </Row>

        </div >
    )
}


AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout
