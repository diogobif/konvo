import { create } from "zustand";
import { UserState, UserData, UserStateActions, UserDTO } from "./types";

const useUser = create<UserState>()((set, get) => ({
  name: null,
  avatarSrc: null,
  id: null,
  actions: {
    setUserId: (id: string): void => {
      set((state) => ({
        ...state,
        id: id,
      }));
    },

    setUserData: (data: UserDTO): void => {
      set((state) => ({
        ...state,
        name: data.name ? data.name : state.name,
        avatarSrc: data.avatarSrc ? data.avatarSrc : state.avatarSrc,
        id: data.id ? data.id : state.id,
      }));
    },

    clearUserData: (): void => {
      set({
        name: null,
        avatarSrc: null,
        id: null,
      });
    },
  },
}));

export const useUserActions = (): UserStateActions =>
  useUser((state: UserState) => state.actions);

export const useUserName = (): string | null =>
  useUser((state: UserState) => state.name);

export const useUserId = (): string | null =>
  useUser((state: UserState) => state.id);
