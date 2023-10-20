import {useNavigate} from 'react-router-dom'


export default function Navbar (){

    const navigate = useNavigate() 

    return(
      <div id="conteneur" className=' bg-sky-500  '>
        <div id="logo" style={{display:'inline-block',margin:'10px'}}>
            <h>ENI Exchange</h>
        </div>
        <div id="searchBar" class="text-center ml-80 w-5/12 "style={{display:'inline-block'}}>
            <input type="text" className="w-96 rounded-xl h-12 outline-slate-200 text-slate-500 outline hover:outline-blue-00" placeholder="rechercher ici" />
        </div>
        <div id="sous-conteneur" style={{display:'inline-block',margin:'10px',float:'right'}}>
                    <div id="home" onClick={()=>navigate("/")}style={{display:'inline-block',margin:'10px'}}>
                        <button>
                            <div className="inline-block float-left mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            </div>
                            <div className='inline-block'>
                            Publication
                            </div>
                        </button>
                    </div>
                    <div id="relation" style={{display:'inline-block',margin:'10px'}}>
                        <button>
                            <div className="inline-block float-left mr-1">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                            </div>
                        <div className='inline-block '>
                         Relation
                        </div>
                        </button>
                    </div>
                  <div id="notification" style={{display:'inline-block',margin:'10px' }}>
                    <button>
                        <div className="inline-block float-left mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>
                        </div>
                        <div className="inline-block">
                        Notification
                        </div>
                    </button>   
                  </div>
        </div>        
        </div>
        
    )
}