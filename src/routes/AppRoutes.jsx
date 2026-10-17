import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import UsersPage from "../pages/UsersPage";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children:[
            {
                path:"",
                element:<HomePage />
            },
            {
                path:"users",
                element:<UsersPage />
            },
            {
                path:"products",
                element:<ProductPage />
            },
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
