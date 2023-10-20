import Navbar from "../../Components/navbar";
import AjoutCours from "../../Components/ajoutForm";



export default function AddPostScreen(){
    return (
        <div>
            <Navbar />
            <div style={{marginTop:'100px'}}>
            <AjoutCours  />
            </div>
        </div>
    );
};