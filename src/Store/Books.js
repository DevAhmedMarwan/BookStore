import { create } from "zustand";
import axios from "axios";

const useBooksStore = create((set, get) => ({
  data: [],
  singleBook: null,
  pages: 0,
  loading: false,

  fetchBooks: async () => {
    const { data, pages } = get();
    try {
      set({ loading: true });

      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:programming&Filtering=free-ebooks&startIndex=${pages}`
      );

      if (res.status === 200) {
        set({
          data: [...data, ...res.data.items],
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      set({ loading: false });
    }
  },

  fetchSingleBook: async (id) => {
    try {
      set({ loading: true });

      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );

      if (res.status === 200) {
        set({
          singleBook: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  nextPage: () =>
    set((state) => ({
      pages: state.pages + 10,
    })),
}));

export default useBooksStore;


