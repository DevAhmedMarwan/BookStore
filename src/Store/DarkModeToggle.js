import { create } from "zustand";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const useDarkModeToggle = create((set, get) => ({
  theme:
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "system",

  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },

  applyTheme: () => {
    const { theme } = get();
    const appliedTheme = theme === "system" ? getSystemTheme() : theme;

    if (appliedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  isDark: () => {
    const { theme } = get();
    const appliedTheme = theme === "system" ? getSystemTheme() : theme;
    return appliedTheme === "dark";
  },
}));

export default useDarkModeToggle;
