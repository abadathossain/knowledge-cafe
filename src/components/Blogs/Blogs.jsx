import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"

export default function Blogs() {

    const [blogs, setBlogs]=useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
        // .then(data=>console.log(data))
    },[])

  return (
    <>
    <div className="md:w-2/3">
    <h1 className="text-4xl ml-5">Blogs: {blogs.length}</h1>
    {
        blogs.map(blog=><Blog 
            key={blog.id}
             blog={blog}
             ></Blog>)
    }
    </div>
    </>
  )
}
