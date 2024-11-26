import { create } from "zustand";

interface PoleDexStore {
  value?: string;
  setValue: (value?: string) => void;
}

const usePoleDexStore = create<PoleDexStore>((set) => ({
  value: undefined,
  setValue: (value) => set({ value }),
}));

export default usePoleDexStore;
