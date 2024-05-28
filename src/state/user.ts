import { User } from '@/types'
import { create } from 'zustand'

interface UserState {
    isAuth: boolean
    name: string
    setIsAuth: (isAuth: boolean) => void
    setUser: (user: User) => void
  }

export const useUser = create<UserState>((set) => ({
  isAuth: true,
  name: "",
  setIsAuth: (isAuth) => set((state) => ({ isAuth: state.isAuth = isAuth })),
  setUser: (user) => set({ name: user.name, isAuth: true }),
}))