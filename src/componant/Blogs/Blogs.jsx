import { useEffect } from "react";
import { useState } from "react"

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
  return (
    <div>

    </div>
  )
}
