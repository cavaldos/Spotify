import "./App.css";
import React from "react";
import { RouterProvider, Routes } from "react-router-dom";
import routers from "./routers/index.jsx";

const App: React.FC = () => {
  return (
    <>
   
        <RouterProvider router={routers} />
    
    </>
  );
};

export default App;
