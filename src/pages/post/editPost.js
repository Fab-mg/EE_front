import Navbar from "../../Components/navbar";
import ModifCours from "../../Components/editForm";

export default function EditPostScreen(){

    return(
        <div>
            <Navbar />
            <div style={{marginTop:'100px'}}>
            <ModifCours />
            </div>
        </div>
    )
}