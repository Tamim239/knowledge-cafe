import PropTypes from "prop-types";
import { CiBookmarkCheck } from "react-icons/ci";

export default function Blog({ blog, handleBookmarks, handleMarkAsRead }) {
  const { title, cover, author_img, author_name, posted_date, reading_time, hashTag } = blog;
  // console.log(blog)
  return (
    <div className="mb-20 space-y-4">
      <img className="w-full" src={cover} alt={`Cover picture of title ${title}`} />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-16 rounded-full" src={author_img} alt="" />
            <div className="ml-6">
              <h3>{author_name}</h3>
              <p>{posted_date}</p>
            </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={()=>handleBookmarks(blog)} className="text-2xl text-red-400 ml-2"><CiBookmarkCheck /></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
     <div className="space-x-3 space-y-3">
     {
        hashTag.map((hash, i) => <span key={i}>#{hash}</span>)
      }
     </div>

     <button onClick={()=> handleMarkAsRead(reading_time)} className="underline text-purple-800 font-bold">Mark As Read</button>

    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func
}
