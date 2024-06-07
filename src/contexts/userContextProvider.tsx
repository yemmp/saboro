"use client";

import { createContext, useState, ReactNode } from "react";

// Context type
type TUserContext = {
  isLogged: boolean;
  isRegistered: boolean;
};

// Props
type UserContextProviderProps = {
  children: ReactNode;
};

//  Create Context
export const UserContext = createContext<TUserContext | null>(null);

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  // States
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // Derived State
  // Actions
  return (
    <UserContext.Provider value={{ isLogged, isRegistered }}>
      {children}
    </UserContext.Provider>
  );
}
