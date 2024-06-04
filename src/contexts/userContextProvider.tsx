"use client";

import { createContext, useState, ReactNode } from "react";

// Context type
type TUserContext = {
  isLogged: boolean;
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

  // Derived State
  // Actions
  return (
    <UserContext.Provider value={{ isLogged }}>{children}</UserContext.Provider>
  );
}
