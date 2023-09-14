import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Welcome from '../pages/welcome/index';
import Login from '../pages/login/index';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="welcome" element={<Welcome />} />
      <Route path="login" element={<Login />} />
      {/* ... etc. */}
    </Route>
  )
);
