/* eslint-disable react/prop-types */
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';

function PostCard(post) {
    const { $id, title, featuredImage, content } = post;

    return (
        <div className="p-4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg md:w-[1200px] w-[350px] mx-auto  2xl:w-[1250px] rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt="BlogPostImage"
                    className="w-[270px] rounded-l-lg aspect-video object-cover object-top"
                />
                <div className="flex flex-col md:items-start items-center gap-5">
                    <h1 className="text-4xl font-bold text-start line-clamp-1">
                        {title}
                    </h1>
                    <p className="text-xl line-clamp-1">{parse(content)}</p>
                    <Link
                        to={`/post/${$id}`}
                        className="rounded-md border-2 border-black bg-black px-3 py-2 text-white transition-all duration-500 hover:bg-inherit hover:text-black"
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
