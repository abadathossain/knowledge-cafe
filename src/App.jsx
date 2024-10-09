
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks]=useState([])

  const handleBookmarks=(blog)=>{
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks)
  }
 

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
          <Blogs handleBookmarks={handleBookmarks}></Blogs>
           <Bookmarks bookmarks={bookmarks}/>
     </div>
     
      
    </>
  )
}

export default App
