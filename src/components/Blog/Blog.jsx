import PropTypes from 'prop-types';
export default function Blog({blog}) {
    console.log(blog)
    const {title, cover, author, posted_date, author_img,reading_time, hashtags}=blog
  return (
    <div className='ml-5'>
        <img src={cover} alt={`Cover image of ${title}`} />

        <div className='flex justify-between'>
            <div className='flex'>
                <img className='w-14 mr-5' src={author_img} alt="" />
                <div>
                    <h3>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} in min</span>
            </div>

        </div>
        <h2>{title}</h2>
       <p>
        {
            hashtags.map((hash, idx)=><span key={idx}><a href=''/>#{hash}</span>)
        }
        </p> 

    </div>
  )
}

// Can not works properly in prop types npm package after installation

Blog.PropTypes={
    blog:PropTypes.object.isRequired
}
