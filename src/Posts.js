import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Post from "./Post";


function Posts() {
  const [blogs, setBlogs] = useState([]);
  // const [records ,setRecords] =useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
        .then(res => {
          console.log(res)
          console.log(res.data.products.brand
            )
            setBlogs(res.data.products)

        })
        .catch(err => console.log(err))
    }, [])
    // const getDate =(e)=>{
    //   setBlogs(records.filter(rest=>rest.title.toLowerCase().inculdes(e.target.value.toLowerCase())))


    // }
  return (
    <div className="posts">
      <div className="search-container">
        <input type="text" placeholder="search" className="search-input"  />
      </div>
      <div className="blog-icon">
      <h3>Blogs </h3>
      <li className="fa fa-calculator"></li>
      </div>
      <div className="posts-container">
        {blogs.map((blog, index) => (
          <div key={blog.id}>
            <Post blog={blog} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
