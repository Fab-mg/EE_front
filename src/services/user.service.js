import Axios from 'axios';
import Cookies from 'js-cookie';

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

export const getUserByID = async (userID) => {
  console.log('I have been called for : ', userID);
  const uri = `http://localhost:6969/users/${userID}`;
  const token = Cookies.get('token');
  try {
    const response = await Axios.get(uri, {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    });
    console.log('sending response', response.data);
    return response.data;
  } catch (error) {
    console.log('Failed to get user data: ', error);
    return null;
  }
};
