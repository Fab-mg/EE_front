import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Welcome from '../pages/welcome/index';
import Login from '../pages/login/index';
import AuthGuard from '../components/AuthGuard';
import Register from '../pages/register';

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
      {/* ... etc. */}
    </Route>
  )
);
