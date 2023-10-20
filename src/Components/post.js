import { useEffect, useState } from "react"; 
import { useNavigate,useParams } from "react-router-dom";
import PostFooter from "./postFooter";


export  default  function Post ({post}){
   const [video,setVideo] = useState()
   const navigate = useNavigate()
   const params = useParams;

    return(
           <div   className=" card rounded-md bg-white-100   ">
                <div id="profil" >
                    <div  id="profil_img">
                        <img src="/pdp.jpg" style={{borderRadius:80+'%',height:50+'px',width:50+'px',display:'inline-block',float:'left'}} alt="profil"   />
                    </div>
                    <div id="profi_name" style={{display:'inline-block'}}>
                        <b>Mbolatiana Robson</b>
                    </div>
                </div>
                <div id="post" >
                    <div  id="video">
                    <video className="rounded-lg "  height="340" controls>
                        <source src={"http://localhost:6969/sendVideo/"+post.video}   type="video/mp4"  />
                  </video>
                    </div>
                    <div id="contenu" className="inline-block">
                        <div id="titre">
                        <b>{post.titre}</b>
                        </div>
                        <div id="text" className="ml-5 p-2  rounded ">
                            {post.text}
                        </div>
                    </div>
                    <div className="inline-block float-right">
                    <PostFooter post={post} />
                    </div>
                   
                </div>
           </div>
    );
};