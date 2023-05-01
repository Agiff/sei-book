import { Outlet, createHashRouter, redirect } from "react-router-dom";
import HomePage from '../pages/HomePage';
import CustomNavbar from "../components/CustomNavbar";
import LoginPage from "../pages/LoginPage";
import EbookPage from "../pages/EbookPage";

const router = createHashRouter([
  {
    path: "/",
    loader: () => {
      if (!localStorage.access_token) throw redirect('/login');
      return null;
    },
    element: <div>
      <CustomNavbar />
      <Outlet />
    </div>,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/ebooks",
        element: <EbookPage />
      }
    ]
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