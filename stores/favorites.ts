import { create } from 'zustand';

interface Favorites {
    favoriteSneakers: Array<number>;
    addToFavorites: (sneakerId:number) => void;
    removeFromFavorites: (sneakerId:number) => void;
} 


const useFavoriteStore = create<Favorites>((set) => {
return {
    favoriteSneakers: [],
    addToFavorites: (sneakerId) =>
        set((state) => ({
          favoriteSneakers: [...state.favoriteSneakers, sneakerId],
        })),
    removeFromFavorites: (sneakerId) =>
        set((state) => ({
        favoriteSneakers: state.favoriteSneakers.filter((id) => id !== sneakerId),
        })),
 }
})

export default useFavoriteStore