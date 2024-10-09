// import PropTypes from 'prop-types';
// import { FaBookmark , FaRegBookmark} from "react-icons/fa";
// import { FaRegBookmark } from 'react-icons/fa';

export default function Blog({blog,handleBookmarks}) {
    console.log(blog)
    const {title, cover, author, posted_date, author_img,reading_time, hashtags}=blog
  return (
    <div className='ml-5 mb-10'>
        <img className='w-full' src={cover} alt={`Cover image of ${title}`} />

        <div className='flex justify-between mt-5'>
            <div className='flex'>
                <img className='w-14 mr-5 ' src={author_img} alt="" />
                <div>
                    <h3>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} in min</span>
                {/* <button><FaRegBookmark /></button> */}
                <button onClick={()=>handleBookmarks(blog)} className="ml-2 text-red-500"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </button>
            </div>

        </div>
        <h2 className='text-4xl'>{title}</h2>
       <p>
        {
            hashtags.map((hash, idx)=><span key={idx}><a href=''/>#{hash}</span>)
        }
        </p> 

    </div>
  )
}

// Can not works properly in prop types npm package after installation

// Blog.PropTypes={
//     blog:PropTypes.object.isRequired
// }
