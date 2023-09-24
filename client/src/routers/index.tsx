import { createBrowserRouter, Outlet } from "react-router-dom";

import Home from "~/pages/Home";
import ProtectedRoute from "~/routers/ProtectRoute";

import DefaultLayot from "~/components/layout/default";

const AuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default createBrowserRouter([
  {
    element: <DefaultLayot />,
    children: [
      {
        element: <Home />,
        path: "/",
      },

      {
        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <h1>Login</h1>,
          },
          {
            path: "/",
            element: <Home />,
          },
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: "/",
                element: <Home />,
                children: [
                  {
                    path: "/like-song",
                    element: <h1>Like song</h1>,
                  },
                  {
                    path: "/create-playlist",
                    element: <h1>Create playlist</h1>,
                  },
                  {
                    path: "/search",
                    element: <h1>Search</h1>,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
