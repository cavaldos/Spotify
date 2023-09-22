import { createBrowserRouter, Outlet } from "react-router-dom";

import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";
import Auth from "~/pages/auth";
const AuthLayout = () => {
  return <Outlet />;
};
export default createBrowserRouter([
  {
    path: "/",

    element: <Home />,
  },
  {
    path: "/auth",

    element: <Auth />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "/profile/search",
        element: <Search />,
      },
    ],
  },
]);
