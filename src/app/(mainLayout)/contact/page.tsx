"use client"

import { getAllBlogPosts } from "@/actions/blog.action";
import { BlogPost } from "@/types/blog.type";
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    ( async () => {
      const { data } = await getAllBlogPosts();
      setBlogs(data);
    })()
  }, []);
  return (
    <div>
      <h1>this is Contact Page</h1>
      {blogs.map((blog: BlogPost) => (
        <div key={blog?.id}>{blog?.title}</div>
      ))}
    </div>
  )
}