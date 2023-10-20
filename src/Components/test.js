export default function Test(){
    return (
        <div id="conteneurForm">
                <input className="rounded-md" name="titre" type="text" placeholder="titre" />
                <label for="titre">Titre:</label> 
                <select className="rounded-md" name="niveau" type="text" placeholder="titre">
                    <option>L1</option>
                    <option>L2</option>
                    <option>L3</option>
                    <option>M1</option>
                    <option>M2</option>
                </select>
                <label for="titre">Niveau:</label> 
                <input className="" name="video tutoriel" type="file"  />
                <label for="video tutoriel">Titre</label> 
                <textarea className="rounded-md" name="text" type="text"  />
                <label for="text">Description:</label> 
           </div> 
    )
}