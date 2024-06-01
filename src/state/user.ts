import { Role, User } from "@/types";
import { create } from "zustand";

interface UserState {
  isAuth: boolean;
  name: string;
  role: Role;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (user: User) => void;
}

export const useUser = create<UserState>((set) => ({
  isAuth: true,
  name: "Erik Aouizerate",
  role: Role.Client,
  setIsAuth: (isAuth) => set((state) => ({ isAuth: (state.isAuth = isAuth) })),
  setUser: (user) =>
    set(() => ({ name: user.name, isAuth: true, role: user.role })),
}));
