import { createContext } from "react";
import { User } from "../@types";

type RegisterUserContextData = {
  user: User;
  setUser: (data: User) => void;
};

export const RegisterUserContext = createContext<RegisterUserContextData>(
  {} as RegisterUserContextData
);
