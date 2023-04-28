import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from '../pages/HomePage';
import CustomNavbar from "../components/CustomNavbar";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      if (!localStorage.access_token) throw redirect('/login');
      return null;
    },
    element: <div>
      <CustomNavbar />
      <HomePage />
    </div>
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) throw redirect('/');
      return null;
    },
  },
]);

export default router