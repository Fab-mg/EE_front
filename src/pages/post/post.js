import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
// import PostFooter from "../../Components/postFooter";

export default function PostScreen() {
  const [posts, setPosts] = useState();
  const getAllPost = async () => {
    try {
      await fetch('http://localhost:6969/posts/get')
        .then((response) => response.json())
        .then((data) => setPosts(data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '100px' }}>{posts && posts.map((post) => <Post post={post} />)}</div>
    </div>
  );
}
