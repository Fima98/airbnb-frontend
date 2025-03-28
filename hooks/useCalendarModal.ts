import { create } from "zustand";

interface CalendarModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useCalendarModal = create<CalendarModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useCalendarModal;
