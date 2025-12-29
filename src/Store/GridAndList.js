import { create } from "zustand";

const useViewToggleStore = create((set) => ({
  view: "grid",
  setGrid: () => set({ view: "grid" }),
  setList: () => set({ view: "list" }),
}));

export default useViewToggleStore;
