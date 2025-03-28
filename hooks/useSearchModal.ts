import { create } from "zustand";

export type SearchQuery = {
  country: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  category: string;
};

interface SearchModalStore {
  isOpen: boolean;
  step: string;
  filters: SearchQuery;
  query: SearchQuery; 
  open: (step: string) => void;
  close: () => void;
  setFilters: (filters: SearchQuery) => void;
  applyFilters: () => void;
}

const defaultQuery: SearchQuery = {
  country: "",
  checkIn: null,
  checkOut: null,
  guests: 0,
  category: "",
};

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  step: "location",
  filters: defaultQuery,
  query: defaultQuery,
  open: (step: string) => set({ isOpen: true, step }),
  close: () => set({ isOpen: false }),
  setFilters: (filters: SearchQuery) => set({ filters }),
  applyFilters: () =>
    set((state) => ({
      query: state.filters, 
    })),
}));

export default useSearchModal;
