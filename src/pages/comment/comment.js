import Navbar from "../../Components/navbar"
import Post from "../../Components/post"
import CommentList from "../../Components/comment"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

export default function CommentScreen(){
    const params = useParams();
    const IdPost = params.id ;
    const [post,setPost] = useState();

    const getPostById = async()=>{
        console.log(IdPost)
            try{
                 await fetch("http://localhost:6969/posts/get/"+IdPost,{
                        method:'GET'
                }).then((response)=>response.json())
                  .then((data)=>{
                    setPost([data])
                    console.log(post)
                })
            }catch(err){
                console.error(err)
            }
    }

    useEffect(()=>{
        getPostById()
    })

    return (
        <div id="container"> 
        <Navbar />
        
        {post && post.map((post)=>
        <div  className="mt-28">
            <Post post={post} />
        </div>
        
        )}
       
        <CommentList post={IdPost} />
        
        </div>

    )
}

