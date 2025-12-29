import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavorites = create(
  persist(
    (set) => ({
      favorites: [],

      toggleFavorite: (book) =>
        set((state) => {
          const exists = state.favorites.some((item) => item.id === book.id);

          return {
            favorites: exists
              ? state.favorites.filter((item) => item.id !== book.id)
              : [...state.favorites, book],
          };
        }),
    }),
    {
      name: "favorites-storage",
    }
  )
);

export default useFavorites;
