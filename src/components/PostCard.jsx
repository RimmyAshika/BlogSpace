/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard(post) {
  const { $id, title, featuredImage, content } = post;
  return (
    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //         <img className="rounded-t-lg" src={appwriteService.getFilePreview(featuredImage)} alt="" />
    //     <div className="p-5">
    //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content || null}</p>
    //         <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //             <Link to={`/post/${$id}`}>Read more </Link>
    //             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //             </svg>
    //         </div>
    //     </div>
    // </div>
    <div className="p-4 backdrop-blur-md backdrop-filter w-[1100px] rounded-lg">
      <div className="flex items-center gap-6">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt="BlogPostImage"
          className="w-[210px] rounded-l-lg"
        />
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl">
            {content}
          </p>
          <Link to={`/post/${$id}`} class="rounded-md border-2 border-black bg-black px-3 py-2 text-white transition-all duration-500 hover:bg-inherit hover:text-black">
          Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
