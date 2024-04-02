import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [hamBurger, setHamBurger] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (windowWidth < 1010) {
      setHamBurger(false);
    } else {
      setHamBurger(true);
    }
  }, [windowWidth]);

  return (
    <UserContext.Provider
      value={{
        hamBurger,
        setHamBurger,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(UserContext);
};
