import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Welcome from '../pages/welcome/index';
import Login from '../pages/login/index';
import PostScreen from '../pages/post/post';
import AddPostScreen from '../pages/post/addPost';
import ListScreen from '../pages/post/postList';
import EditPostScreen from '../pages/post/editPost';
import CommentScreen from '../pages/comment/comment';
import AuthGuard from '../components/AuthGuard';
import Register from '../pages/register';
import Chat from '../pages/chat';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="welcome"
        element={
          <AuthGuard>
            <Welcome />
          </AuthGuard>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="chat" element={<Chat />} />
      <Route
        path="/"
        element={
          <AuthGuard>
            <PostScreen />
          </AuthGuard>
        }
      />
      <Route
        path="/add"
        element={
          <AuthGuard>
            <AddPostScreen />
          </AuthGuard>
        }
      />
      <Route
        path="/update/:id"
        element={
          <AuthGuard>
            <EditPostScreen />
          </AuthGuard>
        }
      />
      <Route
        path="/list"
        element={
          <AuthGuard>
            <ListScreen />
          </AuthGuard>
        }
      />
      <Route
        path="/comment/:id"
        element={
          <AuthGuard>
            <CommentScreen />
          </AuthGuard>
        }
      />
    </Route>
  )
);
