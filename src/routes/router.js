import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Welcome from '../pages/welcome/index';
import Login from '../pages/login/index';
import AuthGuard from '../components/AuthGuard';
import Register from '../pages/register';
import Chat from '../pages/chat';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
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
      {/* ... etc. */}
    </Route>
  )
);
