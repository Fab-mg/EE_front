import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/user.service';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';

export default function RegisterForm() {
  const [nom, setNom] = useState(null);
  const [prenom, setPrenom] = useState(null);
  const [email, setEmail] = useState(null);
  const [matricule, setMatricule] = useState(null);
  const [phone, setPhone] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [password, setpassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [niveau, setNiveau] = useState(null);
  const [parcours, setParcours] = useState(null);
  const [niveauClicked, setNiveauClicked] = useState(false);
  const [parcoursClicked, setParcoursClicked] = useState(false);
  const navigate = useNavigate();

  const niveauList = ['L1', 'L2', 'L3', 'M1', 'M2', 'Ancient'];
  const parcoursList = ['IG', 'GB', 'SR'];

  const nomHandler = (e) => {
    setNom(e.target.value);
  };
  const prenomHandler = (e) => {
    setPrenom(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHanlder = (e) => {
    setPhone(e.target.value);
  };
  const birthdayHandler = (e) => {
    setBirthday(e.target.value);
  };
  const matriculeHandler = (e) => {
    setMatricule(e.target.value);
  };
  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };
  const passwordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!nom || !password || !passwordConfirm || !prenom || !email || !matricule || !niveau || !parcours || !phone) {
      return false;
    }
    if (!password !== !passwordConfirm) {
      return false;
    }
    if (!emailRegex.test(email)) {
      console.log('Email error: ' + email);
      return false;
    }
    if (phone.length !== 10) {
      console.log('Phone error: ' + phone);
      return false;
    }
    if (matricule.length > 7) {
      return false;
    }
    return true;
  };

  const register = async () => {
    if (!validateForm()) {
      console.log('Invalid form');
      return;
    }
    const userInfo = {
      nom,
      prenom,
      matricule,
      email,
      password,
      niveau,
      phone,
      parcours,
    };
    const response = await registerUser(userInfo);
    if (!response || response.status !== 200) {
      console.log('failed registration');
      return;
    }
    console.log('registered user');
    return;
  };

  return (
    <div>
      <h2 className="text-center font-bold text-xl mt-10 mb-4">Bienvenue sur ENI EXCHANGE !</h2>
      <p className="text-center text-md mb-3">Veuillez remplir le formulaire suivant pour créer votre compte!</p>
      <div className="flex flex-col items-center bg-white w-[600px] mx-auto rounded-md text-black py-4 my-auto mt-5 shadow-2xl border-[2px] border-black">
        <div className="flex flex-col">
          {/* <label>Type</label>
        <div>Enseignant</div>
        <div>Etudiant</div> */}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-between w-full">
            <input
              type="text"
              value={nom}
              className="border-[2px] border-black my-2 p-2 mx-2 h-10"
              placeholder="Nom"
              onChange={(e) => nomHandler(e)}
            />
            <input
              type="text"
              value={prenom}
              className="border-[2px] border-black my-2 p-2 mx-2 h-10"
              placeholder="Prenom"
              onChange={(e) => prenomHandler(e)}
            />
          </div>
          <input
            type="text"
            value={birthday}
            className="w-full border-[2px] border-black my-2 p-2 mx-2 h-10"
            placeholder="Date de naissance"
            onChange={(e) => birthdayHandler(e)}
          />
          <input
            type="text"
            value={phone}
            className="w-full border-[2px] border-black my-2 p-2 mx-2 h-10"
            placeholder="Numero de telephone"
            onChange={(e) => phoneHanlder(e)}
          />
          <input
            type="text"
            value={matricule}
            className="w-full border-[2px] border-black my-2 p-2 mx-2 h-10"
            placeholder="Matricule"
            onChange={(e) => matriculeHandler(e)}
          />
          <input
            type="text"
            value={email}
            className="w-full border-[2px] border-black my-2 p-2 mx-2 h-10"
            placeholder="Email"
            onChange={(e) => emailHandler(e)}
          />
          <input
            type="text"
            value={password}
            className="w-full border-[2px] border-black my-2 p-2 mx-2 h-10"
            placeholder="Mot de passe"
            onChange={(e) => passwordHandler(e)}
          />
          <input
            type="text"
            value={passwordConfirm}
            className="w-full border-[2px] border-black my-2 p-2 mx-2 h-10"
            placeholder="Confirmer votre mot de passe"
            onChange={(e) => passwordConfirmHandler(e)}
          />
        </div>
        <div className="flex flex-row justify-evenly w-full">
          <div>
            <div onClick={() => setNiveauClicked(!niveauClicked)}>
              <span className="font-bold mr-2 flex items-center gap-2">
                Niveau <MdOutlineArrowDropDownCircle />
              </span>
              {niveau && <span>{niveau}</span>}
            </div>
            {niveauClicked &&
              niveauList.map((nivo) => {
                return (
                  <div
                    className="border-[1px] border-black text-center"
                    onClick={() => {
                      setNiveau(nivo);
                      setNiveauClicked(false);
                    }}
                  >
                    {nivo}
                  </div>
                );
              })}
          </div>
          <div>
            <div onClick={() => setParcoursClicked(!parcoursClicked)}>
              <span className="font-bold mr-2 flex items-center gap-2">
                Parcours <MdOutlineArrowDropDownCircle />
              </span>
              {parcours && <span>{parcours}</span>}
            </div>
            {parcoursClicked &&
              parcoursList.map((parkour) => {
                return (
                  <div
                    className="border-[1px] border-black text-center"
                    onClick={() => {
                      setParcours(parkour);
                      setParcoursClicked(false);
                    }}
                  >
                    {parkour}
                  </div>
                );
              })}
          </div>
        </div>
        {/* <div>
        <label>Type</label>
        <div>SR</div>
        <div>GB</div>
        <div>IG</div>
      </div> */}
        <div className="flex flex-row justify-center my-2">
          <div className="rounded-md bg-[#735be8] py-2 px-10 text-white font-bold cursor-pointer" onClick={register}>
            Valider
          </div>
          <div
            className="rounded-md bg-[#735be8] py-2 px-5 text-white font-bold cursor-pointer ml-8"
            onClick={() => navigate('/login')}
          >
            Se connecter
          </div>
        </div>
      </div>
    </div>
  );
}
