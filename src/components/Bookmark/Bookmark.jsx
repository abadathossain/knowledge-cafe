
export default function Bookmark({bookmark}) {
    const {title}=bookmark
  return (
    <div className=" bg-slate-400 ml-3 mt-2 p-3 rounded-xl">
        <h2> Bookmarked Blogs:{title}</h2>
       
    </div>
  )
}
