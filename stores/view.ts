import { create } from "zustand";

interface IUseViewStore {
  fetchCurrentSneakerId: (sneakerId: number) => void;
  currentSneakerIdToFetch: number | null;
}

const useViewStore = create<IUseViewStore>((set) => {
  return {

    currentSneakerIdToFetch: null, 

    fetchCurrentSneakerId: (sneakerId) =>
      set((state) => ({
        currentSneakerIdToFetch: sneakerId,
    })),

  }
});

export default useViewStore