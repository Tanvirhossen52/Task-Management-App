import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confg";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
     const [curentrUser, setcurentrUser] = useState(null);
  useEffect(() => {
    const auth = getAuth(app);
    const getCurentrUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        
        setcurentrUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
      return () => getCurentrUser();
    });
  }, []);


 
  
 
  const value = { curentrUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
