import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Register from "../pages/auth/Register";
import Verify from "../pages/auth/Verify";
import Login from "../pages/auth/Login";
import AuthLayout from "../Layout/AuthLayout";
import HomeScreen from "../pages/home/HomeScreen";
import Blogs from "../pages/home/Blogs";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "verify",
        element: <Verify />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
