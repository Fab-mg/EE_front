import { useState,useEffect } from "react"
import Navbar from "../../Components/navbar"
import PostList from "../../Components/postList"

export default function ListScreen(){
    
    return(
        <div>
        <Navbar />
        <div className="mt-28">
        <PostList  />
        </div>
        </div>

    )
}