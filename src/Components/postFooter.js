import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PostFooter({post}){
    const navigate = useNavigate()
    const [info,setInfo] = useState(
        {
        like:"65103f9c0f216aa8ab8f111e",
        likeNumber:"",
        text:"",
        postId:post._id,
        like:""
    }
    )
    const react = async()=>{
        try{    
                  await fetch("http://localhost:6969/posts/update/"+post._id,{
                    method:'PUT',
                    body: info
                })
        }catch(err){
            console.error(err)
        }
    }

    const getReact = async()=>{
        try{
             await fetch("http://localhost:6969/posts/get/"+post._id,{
                method:'GET'
             }).then((response)=>response.json())
               .then((data)=>setInfo({
                likeNumber:data.like
            }))
               .finally(()=>console.log(info.likeNumber.length))
        }catch(err){
            console.error(err)
        }
    }
    const addComment = async()=>{
        try{
              
             fetch("http://localhost:6969/comment/post",{
                    method:'POST',
                    body:JSON.stringify({
                        post:post._id,
                        text:info.text,
                        like:"bb"
                    }),
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                    }
                })
        }catch(err){
            console.error(err)
        }
        await navigate("/comment/"+post._id)
    }

    useEffect(()=>{
        getReact()
    },[])

    return (
        <div id="pied" style={{marginTop:0.5+'em'}}>
        <div id="conmment-icon" style={{display:'inline_block',float:'left'}}>
            <button onClick={()=>react()} >
                <div  className="inline-block float-left" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                </div>
                <div className="inline-block"></div>
            </button>
            </div>
            <div id="like-icon" style={{display:'inline_block',marginLeft:4+'em'}}>
            <button onClick={()=>navigate("/comment/"+post._id)}>
                <div  className="inline-block float-left">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                 </svg>
                </div>
                <div className="inline-block"></div>
            </button>
            </div>
            <div id="add-comment" className="w-full ">
                <div className="inline-block">
                <input type="text" onChange={(e)=>setInfo({text:e.target.value})} placeholder="votre commentaire" className="rounded-md  mt-3 h-9 w-11/12 border-solid outline-slate-200  border-2 border-4 border-slate-200 " />
                </div>
                <div className="inline-block">
                <button onClick={()=>addComment()}>Ajouter</button>
            </div> 
            </div>
            
        </div>
    )
}