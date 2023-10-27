import Axios from 'axios';
import Cookies from 'js-cookie';

export const createPost = async (body) => {
  const uri = 'http://localhost:6969/video';
  const token = Cookies.get('token');
  console.log('posttoken', token);
  try {
    const response = await Axios.post(uri, body, {
      headers: {
        'Content-Type': 'application/octet-stream',
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log('Create post failed: ', error);
    return null;
  }
};
