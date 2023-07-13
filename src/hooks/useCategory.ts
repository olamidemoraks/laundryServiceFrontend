import { create } from "zustand";

interface CategoryStore {
  category: any;
  setCategory: (value: string) => void;
}

const useCategory = create<CategoryStore>((set) => ({
  category: localStorage.getItem("category") ?? "",
  setCategory: (value) => {
    localStorage.setItem("category", value);
    set({ category: localStorage.getItem("category") });
  },
}));

export default useCategory;
