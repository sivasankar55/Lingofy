import { create } from 'zustand'

 export const useThemeStore = create((set) => ({
 theme: localStorage.getItem("lingofy-theme") || "coffee",
 setTheme: (theme) => {
    localStorage.setItem("lingofy-theme", theme);
    set({ theme });
 },
}));
 