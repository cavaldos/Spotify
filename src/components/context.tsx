import React, { createContext, useState, useEffect, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext<any>({});
const auth = getAuth();

export const AuthProvider = ({ children }: any) => {
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

  return (
    <AuthContext.Provider value={{ googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
