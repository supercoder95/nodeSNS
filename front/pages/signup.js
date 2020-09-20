import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Signup = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>회원가입 | 포크포크</title>
            </Head>
            <AppLayout>signup</AppLayout>
        </>
    )
}

export default Signup;