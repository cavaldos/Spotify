import { createBrowserRouter, Outlet } from "react-router-dom";

import Home from "~/pages/home";
import Auth from "~/pages/auth";
import TestPage from "~/pages/test";
const AuthLayout = () => {
  return <Outlet />;
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/auth/",
        element: <Auth />,
        children: [
          {
            path: "/v1",
            element: <TestPage />,
          },
        ],
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
