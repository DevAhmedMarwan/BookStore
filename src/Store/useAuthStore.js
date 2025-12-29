import { create } from "zustand";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

const useAuthStore = create((set) => ({
  user: null,
  loading: true, 
  setUser: (user) => set({ user, loading: false }),
  logout: async () => {
    await signOut(auth);
    set({ user: null, loading: false });
  },
}));

export const initAuthListener = () => {
  return onAuthStateChanged(auth, (user) => {
    useAuthStore.getState().setUser(user);
  });
};

export default useAuthStore;
