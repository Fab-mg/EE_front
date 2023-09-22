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
