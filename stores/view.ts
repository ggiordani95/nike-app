import { create } from "zustand";

interface SneakerParams {
  id: number | null;
  images: Array<string> | null;
  desc: string | null;
  price: number | null;

}

interface IUseViewStore {
  currentSneaker: SneakerParams;
  fetchCurrentSneakerId: (sneakerId: number) => void;
}

const useViewStore = create<IUseViewStore>((set) => {
  return {
    currentSneaker: { id: null, images: null, desc: null, price: null},

    fetchCurrentSneakerId: (sneakerId) =>
      set((state) => ({
        currentSneaker: { ...state.currentSneaker, id: sneakerId },
      })),
  }
});

export default useViewStore