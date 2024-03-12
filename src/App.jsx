
import './App.css'
import Blogs from './componant/Blogs/Blogs'
import BookMarks from './componant/BookMarks/BookMarks'
import Header from './componant/Header/Header'

function App() {
 

  return (
    <>
      <Header></Header>
      <div className='flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
