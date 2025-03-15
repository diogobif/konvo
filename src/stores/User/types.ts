export type UserData = {
  name: string | null;
  avatarSrc: string | null;
  id: string | null;
};

export type UserDTO = {
  name?: string;
  avatarSrc?: string;
  id?: string;
};

export interface UserStateActions {
  setUserData(data: UserDTO): void;
  getUserData(): UserData;
}

export interface UserState {
  name: string | null;
  avatarSrc: string | null;
  id: string | null;
  actions: UserStateActions;
}
