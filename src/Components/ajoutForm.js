import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createPost } from '../services/post.service';

export default function AjoutCours() {
  const [titre, setTitre] = useState('');
  const [text, setText] = useState('');
  const [cible, setCible] = useState();
  const [video, setVideo] = useState();
  const [status, setStatus] = useState('publié');
  const [type, setType] = useState('cours');
  const [autheur, setAutheur] = useState('Jean');
  const [post, setPost] = useState([]);

  const getVideo = (e) => {
    console.log('event', e.target.files);
    // setVideo(e.target.value);
    setVideo(e.target.files[0]);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('video', video);
    formData.append('type', type);
    formData.append('titre', titre);
    formData.append('text', text);
    formData.append('cible', cible);
    formData.append('autheur', autheur);
    formData.append('status', status);

    try {
      const response = await createPost(formData);
      if (response && response.status === 200) {
        console.log('Success');
      } else {
        console.error('Upload failed with status:', response.status);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="conteneurForm" className=" font-sans  md:font-serif  me-0.5 mt-3  bg-slate-100 w-3/6 ml-96">
      <div className="w-full border-red-600">
        <label for="titre">Titre:</label>
        <input
          onChange={(e) => setTitre(e.target.value)}
          defaultValue={post.titre}
          className="rounded-md  ml-6 mt-3 h-9 w-11/12 border-solid outline-blue-800  border-2 border-4 border-indigo-200 border-x-indigo-500 "
          name="titre"
          type="text"
          placeholder="titre"
        />
      </div>
      <div className="mt-7">
        <label for="niveau">Niveau:</label>
        <input
          onChange={(e) => setCible(e.target.value)}
          name="niveau"
          className="ml-2  w-96 border-2 border-4 border-indigo-200 border-x-indigo-500"
          type="text"
        />
      </div>
      <div className="mt-7">
        <label for="video tutoriel">Tutoriel:</label>
        <input
          onChange={getVideo}
          name="video"
          accept="video/*"
          className="ml-2  w-96 border-2 border-4 border-indigo-200 border-x-indigo-500"
          type="file"
        />
      </div>
      <div className="mt-7 h-3/4">
        <label for="text">Description:</label>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="rounded-md bg-gray-200  w-full h-96 outline-blue-800 border-2 border-4 border-indigo-200 border-x-indigo-500"
          name="text"
          type="text"
        />
      </div>
      <button
        className="bg-indigo-500 text-zinc-50 text-center rounded-md w-20 h-10"
        onClick={() => {
          uploadFile();
        }}
      >
        Publier
      </button>
    </div>
  );
}
