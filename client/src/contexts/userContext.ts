import { createContext } from "react";
import { User } from "../@types";

type RegisterUserContextData = {
  user: User | null;
  setUser: (data: User | null) => void;
};

export const RegisterUserContext = createContext<RegisterUserContextData>(
  {} as RegisterUserContextData
);
