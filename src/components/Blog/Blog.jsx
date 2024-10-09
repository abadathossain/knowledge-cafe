import PropTypes from 'prop-types';
export default function Blog({blog}) {
    console.log(blog)
  return (
    <div>
        <img src={blog.cover} alt="" />
    </div>
  )
}

// Can not works properly in prop types npm package after installation

Blog.PropTypes={
    blog:PropTypes.object.isRequired
}
