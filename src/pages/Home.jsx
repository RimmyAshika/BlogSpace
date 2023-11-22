import { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components'
import Loading from '../components/Loading';
import Middleware from '../components/Middleware';
function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            setLoading(false)
        });
    }, []);
    return (
        <>
        <div className="w-full">
            <Container>
                {loading && <Loading />} {/* Display loading indicator while posts are being fetched */}
                {!loading && posts.length === 0 && <Middleware />}
                {!loading && posts.length > 0 && (
                    <div className='flex flex-col gap-4 mx-auto'>
                        {posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                )}
,            </Container>
        </div>
        </>
    );
}

export default Home;
