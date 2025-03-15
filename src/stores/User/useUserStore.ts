import { create } from "zustand";
import { UserState, UserData, UserStateActions, UserDTO } from "./types";

const useUserStore = create<UserState>()((set, get) => ({
  name: null,
  avatarSrc: null,
  id: null,
  actions: {
    setUserData: (data: UserDTO): void => {
      set((state) => ({
        ...state,
        name: data.name ? data.name : state.name,
        avatarSrc: data.avatarSrc ? data.avatarSrc : state.avatarSrc,
        id: data.id ? data.id : state.id,
      }));
    },

    getUserData: (): UserData => {
      return {
        avatarSrc: get().avatarSrc,
        name: get().name,
        id: get().id,
      };
    },
  },
}));

export const useUserActions = (): UserStateActions =>
  useUserStore((state: UserState) => state.actions);
