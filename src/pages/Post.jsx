import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
// import Markdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { Button, Container } from '../components';

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate('/');
            });
        } else navigate('/');
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate('/');
            }
        });
    };

    return post ? (
        <div className="py-8 mx-80">
            <Container>
                <div className="w-auto aspect-video object-cover flex justify-center mb-4 relative border rounded-xl p-2  bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor="bg-green-500"
                                    className="mr-3 hover:bg-green-600 transition duration-200 ease-in-out"
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-red-500"
                                className="hover:bg-red-600 transition duration-200 ease-in-out"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-3xl rounded-lg p-4 text-white font-bold bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg">
                        {post.title}
                    </h1>
                </div>
                <div className="browser-css text-justify overflow-hidden rounded-xl p-8 leading-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
