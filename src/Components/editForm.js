import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";


export default function ModifCours(){
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;
    const [titre,setTitre] = useState("");
    const [text,setText] = useState("");
    const [cible,setCible] = useState();
    const [video,setVideo] = useState();
    const [status,setStatus] = useState("publié");
    const [type,setType] = useState("cours");
    const [autheur,setAutheur] = useState("Jean");
    const [post,setPost] = useState([]);
    
    const updatingPost = async()=>{
      const formData = new FormData();
      formData.append("video",video);
      formData.append("type",type);
      formData.append("titre",titre);
      formData.append("text",text);
      formData.append("cible",cible);
      formData.append("autheur",autheur);
      formData.append("status",status);
      try{
         fetch('http://localhost:6969/update/'+id,{
          method:'PUT',
          body: formData
          
        })
      }
      catch(err){
        console.error(err)
      }
    await navigate("/list") 
}

  const getById = ()=>{
    try {
      if(id!=""){
        fetch("http://localhost:6969/posts/get/"+id,{
          method:'GET'
        }).then((response)=>response.json())
          .then((data)=>{
            setTitre(data.titre);
            setType(data.type);
            setText(data.text);
            //setVideo(data.video);
            setPost(data)
        })
      }
    }catch(err){
      console.error(err)
    }
  }
    useEffect(()=>{
      getById();
      
  })
    return (
           <div id="conteneurForm" className=" font-sans  md:font-serif  me-0.5 mt-5  bg-slate-100 w-3/6 ml-96">
            <div className="w-full border-red-600">
                <label for="titre">Titre:</label> 
                <input onChange={(e)=>setTitre(e.target.value)} defaultValue={post.titre} className="rounded-md  ml-6 mt-3 h-9 w-11/12 border-solid outline-blue-800  border-2 border-4 border-indigo-200 border-x-indigo-500 " name="titre" type="text" placeholder="titre" />
            </div>
            <div className="mt-7">
            <label for="niveau">Niveau:</label>
            <input onChange={(e)=>setCible(e.target.value)} defaultValue={post.cible} name='niveau'   className="ml-2  w-96 border-2 border-4 border-indigo-200 border-x-indigo-500"  type="text"  /> 
            </div>
            <div className="mt-7">
            <label for="video tutoriel">Tutoriel:</label> 
               <input onChange={(e)=>setVideo(e.target.files[0])}  name='video'  accept="video/*" className="ml-2  w-96 border-2 border-4 border-indigo-200 border-x-indigo-500"  type="file"  /> 
            </div>
            <div className="mt-7 h-3/4">
            <label for="text">Description:</label> 
            <textarea onChange={(e)=>setText(e.target.value)} defaultValue={post.text} className="rounded-md bg-gray-200  w-full h-96 outline-blue-800 border-2 border-4 border-indigo-200 border-x-indigo-500" name="text" type="text"  />
            </div>
            <button className="bg-indigo-500 text-zinc-50 text-center rounded-md w-20 h-10" onClick={()=>updatingPost()}>Modifier</button>
           </div> 
    );
} ;