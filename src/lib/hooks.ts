import { UserContext } from "@/contexts/userContextProvider";
import { useContext } from "react";

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext tem de ser usado dentro de um UserContextProvider"
    );
  }
}
