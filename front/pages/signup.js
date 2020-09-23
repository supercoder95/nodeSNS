import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import { Checkbox, Form, Input, Button } from 'antd'
import { useCallback, useState } from 'react'
// import Password from 'antd/lib/input/Password'
import useinput from '../hooks/useinput'
import styled from 'styled-components'

const ErrorMessage = styled.div`
    color: red;
`


const Signup = () => {
    // Id
    const [id, onChangeId] = useinput('')
    // NickName
    const [nickname, onChangeNickname] = useinput('')
    // Password
    const [password, onChangePassword] = useinput('')

    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value)
        setPasswordError(e.target.value !== password)
    }, [password])

    const [term, setTerm] = useState('')
    const [termError, setTermError] = useState(false)
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked)
        setTermError(false)
    }, [])

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordCheck(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password);
    }, [password, passwordCheck, term])

    return (
        <AppLayout>
            <Head>
                <meta charSet="utf-8" />
                <title>회원가입 | 포크포크</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input
                        name="user-id"
                        value={id}
                        required
                        onChange={onChangeId}
                    />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input
                        name="user-nick"
                        value={nickname}
                        required
                        onChange={onChangeNickname}
                    />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        required
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox
                        name="user-term"
                        checked={term}
                        onChange={onChangeTerm}
                    >
                        슈퍼코더 약관에 동의합니다.
                    </Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit">제출</Button>
                </div>
            </Form>
        </AppLayout>
    )
}

export default Signup;