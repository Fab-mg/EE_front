import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Welcome from '../pages/welcome/index';
import Login from '../pages/login/index';
import PostScreen from '../pages/post/post';
import AddPostScreen from '../pages/post/addPost';
import ListScreen from '../pages/post/postList';
import EditPostScreen from '../pages/post/editPost';
import CommentScreen from '../pages/comment/comment';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="welcome" element={<Welcome />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<PostScreen />} />
      <Route path="/add" element={<AddPostScreen />} />
      <Route path="/update/:id" element={<EditPostScreen />} />
      <Route path="/list" element={<ListScreen />} />
      <Route path="/comment/:id" element={<CommentScreen />} />
     
    </Route>
  )
);
