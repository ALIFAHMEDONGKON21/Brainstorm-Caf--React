import PropTypes from 'prop-types'; // ES6
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


  
    const Blogs = ( {handlemark ,handlemarkread}) => {
   const [blogs,setblogs]=useState([])

   useEffect(()=>{
    fetch(`fake.json`)
    .then(res=>res.json())
    .then(data=>setblogs(data))
   },[])
  

    return (
        <div className="w-2/3 ">
            <h2>Blogs {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} 
                    blog={blog}
                    handlemark={handlemark}
                    handlemarkread={handlemarkread}
                ></Blog>
                )
            }
            
        </div>
    );
};

Blogs.propTypes=
{
    handlemark:PropTypes.func,
    handlemarkread:PropTypes.number
}
export default Blogs;