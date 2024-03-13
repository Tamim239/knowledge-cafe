import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


export default function BookMarks({bookmarks, readingTime}) {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-3 pt-4">
      <div className="mb-5">
        <h1 className="text-3xl text-center bg-red-300 p-4 font-bold">Reading Time Spent : {readingTime}</h1>
      </div>
       <h1 className="text-3xl text-center">BookMarks : {bookmarks.length}</h1>
      {
         bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  )
}


BookMarks.propTypes ={
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}