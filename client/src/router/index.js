import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import CustomNavbar from "../components/CustomNavbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <CustomNavbar />
      <HomePage />
    </div>
  },
]);

export default router