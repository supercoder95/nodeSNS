import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';

const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user)
    const { mainPosts } = useSelector((state) => state.post)

    return (

        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    )
}

export default Home;