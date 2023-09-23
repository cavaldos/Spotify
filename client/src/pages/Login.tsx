import "./App.css";
import React, { createContext, useState, useEffect, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "~/config/firebase";

import GoogleButton from "react-google-button";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log("khanh", result.user);
      })
      .catch((error) => {
        console.log("khanh2", error.message);
      });
  };
  const handleLogin = async () => {
    try {
      await googleSignIn();
      console.log("login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("khanh3", user);
      } else {
        setUser(null);
        console.log("khanh4", user);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("Đăng xuất thành công");
      })
      .catch((error) => {
        console.log("Lỗi đăng xuất", error);
      });
  };
  console.log("khanh5", user);
  return (
    <>
      <h1>sdfasdfdsf</h1>

      <GoogleButton onClick={handleLogin} />

      {/* logout */}
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        logout
      </button>
    </>
  );
};

export default App;
{
  /* <RouterProvider router={routers} /> */
}
