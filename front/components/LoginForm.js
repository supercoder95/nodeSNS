import React, { useState, useCallback } from 'react';
import { Form, Button, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import useinput from '../hooks/useinput';

const ButtonWrapper = styled.div`
    margin-top: 10px;

`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginFrom = ({ setIsLoggedIn }) => {

    const [id, onChangeId] = useinput('')

    const [password, onChangePassword] = useinput('')
    // const [id, setId] = useState('');

    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);

    // const [password, setPassword] = useState('');

    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input
                    name="user-id"
                    value={id}
                    onChange={onChangeId}
                    required
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>
            </div>
        </FormWrapper>
    )
}

LoginFrom.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginFrom