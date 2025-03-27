import { create } from "zustand";

export type SearchQuery = {
    country: string;
    checkIn: Date | null;
    checkOut: Date | null;
    guests: number;
    category: string
}

interface SearchModalStore {
    isOpen: boolean;
    step: string;
    open: (step: string) => void;
    close: () => void;
    query: SearchQuery;
    setQuery: (query: SearchQuery) => void
}


const useSearchModal = create<SearchModalStore>((set) => ({
    isOpen: false,
    step: "",
    open: (step: string) => set({ isOpen: true, step: step }),
    close: () => set({ isOpen: false }),
    query: {
        country: "",
        checkIn: null,
        checkOut: null,
        guests: 0,
        category: ""
    },
    setQuery: (query: SearchQuery) => set({ query })
}))

export default useSearchModal



// import { create } from "zustand";

// export type SearchQuery = {
//   country: string;
//   checkIn: Date | null;
//   checkOut: Date | null;
//   guests: number;
//   category: string;
// };

// interface SearchModalStore {
//   isOpen: boolean;
//   step: string;
//   open: (step: string) => void;
//   close: () => void;
//   query: SearchQuery;
//   draftQuery: SearchQuery;
//   setDraftQuery: (newDraftQuery: SearchQuery) => void;
//   applyFilters: () => void;
//   resetDraftQuery: () => void;
// }

// const initialQuery: SearchQuery = {
//   country: "",
//   checkIn: null,
//   checkOut: null,
//   guests: 1,
//   category: "",
// };

// const useSearchModal = create<SearchModalStore>((set) => ({
//   isOpen: false,
//   step: "",
//   open: (step: string) => set({ isOpen: true, step: step }),
//   close: () => set({ isOpen: false, draftQuery: useSearchModal.getState().query }), // Reset draft on close
//   query: initialQuery,
//   draftQuery: initialQuery,
//   setDraftQuery: (newDraftQuery: SearchQuery) => set({ draftQuery: newDraftQuery }),
//   applyFilters: () => set((state) => ({ query: state.draftQuery, isOpen: false })),
//   resetDraftQuery: () => set({ draftQuery: useSearchModal.getState().query }), // Reset draft to current query
// }));

// export default useSearchModal;