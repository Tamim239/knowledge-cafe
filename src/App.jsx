
import { useState } from 'react'
import './App.css'
import Blogs from './componant/Blogs/Blogs'
import BookMarks from './componant/BookMarks/BookMarks'
import Header from './componant/Header/Header'

function App() {
 const [bookmarks, setBookmarks] = useState([]);
 const [readingTime, setReadingTime] = useState(0);

 const handleBookmarks = blog =>{
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
 }

const handleMarkAsRead = time =>{
  setReadingTime(readingTime + time)
}


  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto'>
      <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  )
}

export default App
