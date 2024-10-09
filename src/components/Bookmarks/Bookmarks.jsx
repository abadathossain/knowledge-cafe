import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({bookmarks}) {
  return (
    <div className="md:w-1/3">
       <h1> Bookmarks Blogs:{bookmarks.length}</h1>
       {
        bookmarks.map(bookmark=><Bookmark 
          key={bookmark.id} 
          bookmark={bookmark}
          ></Bookmark>)
       }
    </div>
  )
}
