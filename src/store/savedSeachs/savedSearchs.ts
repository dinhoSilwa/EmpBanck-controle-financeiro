import { create } from "zustand";

interface SavedSearchProps {
  saved: string[];
  setSaved: (term: string) => void;
  delSaved: (term: string) => void;
}

export const savedTermStore = create<SavedSearchProps>()((set) => ({
  saved: [],
  setSaved: (term: string) =>
    set((state) => {
      if (state.saved.includes(term)) {
        const savedCopy = [...state.saved];
        return { saved: savedCopy };
      } else {
        return { saved: (state.saved = [...state.saved, term]) };
      }
    }),
  delSaved: (term: string) =>
    set((state) => ({
      saved: state.saved.filter((items) => items !== term),
    })),
}));
