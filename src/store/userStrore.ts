import { create } from 'zustand';

interface UserInfoStore {
  userInfo: UserInfo;
  setUserInfo: (newUserInfo: UserInfo) => void;
  clearUserInfo: () => void;
}

const defaultUserInfo: UserInfo = {
  name: '',
  email: '',
  emailVerified: false,
};
export const useUserStore = create<UserInfoStore>((set) => ({
  userInfo: defaultUserInfo,
  setUserInfo: (newUserInfo) => set({ userInfo: newUserInfo }),
  clearUserInfo: () => set({ userInfo: defaultUserInfo })
}));