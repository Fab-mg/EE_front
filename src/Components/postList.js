import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"; 

export default function PostList(){
    const navigate = useNavigate()
    const [posts,setPosts] = useState()

    const getAllPost= async()=>{
        await fetch("http://localhost:6969/posts/get",{
           method : 'GET'   
       }).then((response)=>response.json())
         .then((data)=>setPosts(data))
         .catch((err)=>{
           console.log(err)
        })
}

useEffect(()=>{
    getAllPost()
},[])

const deletePost = async(id)=>{
      try{
        if(window.confirm("Voulez-vous vraiment suprimer ?")){
            fetch("http://localhost:6969/posts/delete/"+id,{
                method:'DELETE'
            })
            
            setPosts(posts.filter(post=>post._id!=id))

        }    
      }catch(err){
        console.log(console.error());
      }
      await navigate("/list")
    }
    useEffect(()=>{

    })

    return (
        <div >
            <table id="postTable" className="border-collapse border border-slate-400 rounded-lg w-3/6 " >
                <thead className="bg-indigo-400 text-center text-white">
                <tr>
                <th className="border border-slate-300" >Titre</th>
                <th className="border border-slate-300">Type</th>
                <th className="border border-slate-300">Niveau</th>
                <th className="border border-slate-300">DateCreation</th>
                <th className="border border-slate-300">Autheur</th>
                <th className="border border-slate-300"></th>
                <th className="border border-slate-300"></th>
                </tr>
                </thead>
                <tbody>
                    {posts && posts.map((post)=>
                        <tr>
                        <td>{post.titre}</td>
                        <td>{post.type}</td>
                        <td>{post.cible}</td>
                        <td>{post.dateCreation}</td>
                        <td>{post.autheur}</td>
                        <td><button onClick={()=>navigate(`/update/${post._id}`)}>Modifier</button></td>
                        <td><button onClick={()=>deletePost(post._id)}>Suprimer</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}