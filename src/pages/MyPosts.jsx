import { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';
import Loading from '../components/Loading';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        appwriteService.getMyPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            setLoading(false)
        });
    }, []);

    return (
        <>
        {
            loading ? <Loading />   :
            <div className="w-full py-8">
                <Container>
                    <div className="">
                        {posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        }
        </>
    );
}

export default AllPosts;
