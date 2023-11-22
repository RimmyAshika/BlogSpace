import { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import Middleware from '../components/Middleware';
function Home() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const authStatus = useSelector((state) => state.auth.status);
    useEffect(() => {
        setLoading(true)
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            setLoading(false)
        });
    }, [authStatus, navigate]);
    return (
        <>
        <div className="w-full">
            <Container>
                {loading && <Loading />} {/* Display loading indicator while posts are being fetched */}
                {!loading && posts.length === 0 && <Middleware />}
                {!loading && posts.length > 0 && (
                    <div className="flex flex-wrap">
                        {posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
        </>
    );
}

export default Home;
