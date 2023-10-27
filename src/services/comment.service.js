import Axios from 'axios';
import Cookies from 'js-cookie';

export const createComment = async (body) => {
  const uri = 'http://localhost:6969/comment/post';
  const token = Cookies.get('token');
  console.log('posttoken', token);
  try {
    const response = await Axios.post(uri, body, {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log('Create comment failed: ', error);
    return null;
  }
};
