import Axios from 'axios';

export const loginUser = async (email, password) => {
  const uri = 'http://localhost:6969/auth/login';
  try {
    const response = await Axios.post(
      uri,
      {
        email,
        password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response;
  } catch (error) {
    console.log('Login failed: ', error);
    return null;
  }
};

export const registerUser = async (userInfo) => {
  const uri = 'http://localhost:6969/users/register';
  try {
    const response = await Axios.post(
      uri,
      {
        type: 'Etudiant',
        nom: userInfo.nom,
        prenom: userInfo.prenom,
        matricule: userInfo.matricule,
        niveau: userInfo.niveau || null,
        userType: userInfo.parcours || null,
        email: userInfo.email,
        password: userInfo.password,
        phone: userInfo.phone || null,
        dateNais: new Date(),
        profilePic: 'link',
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response;
  } catch (error) {
    console.log('Register failed: ', error);
    return null;
  }
};
