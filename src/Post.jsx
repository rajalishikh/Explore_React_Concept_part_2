import { useEffect, useState } from "react"
import "./App.css"
import Posts from "./Posts"

export default function Post(){
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPost(data))

    },[])
    return(
        <div className="student1">
            <h1>New Jsx/Component about Post</h1>
            <p>Total Length POst {post.length}</p>
            {
                post.map((item)=><Posts key={item.id} Posts_info={item} ></Posts>)
            }
        </div>
    )
}