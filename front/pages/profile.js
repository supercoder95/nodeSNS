import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'

const Profile = () => {
    const followerList = [{ nickname: 'supercoder' }, { nickname: 'hypercoder' }, { nickname: 'Ultracoder' }]
    const followingList = [{ nickname: 'supercoder' }, { nickname: 'hypercoder' }, { nickname: 'Ultracoder' }]

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>내 프로필 | 포크포크</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
};

export default Profile;