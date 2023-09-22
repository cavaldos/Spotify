import React from "react";
import { Outlet } from "react-router-dom";

const Home:React.FC = () => {
  return (
    <>
      <h1>home</h1>
      <Outlet />
      
    </>
  );
};

export default Home;
