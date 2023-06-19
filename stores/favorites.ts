import { create } from 'zustand';

interface Favorites {
    favoriteSneakers: Array<Object>;
    addToAdorables: (sneaker:{}) => void;
    removeFromAdorables: (sneakerId:number | null) => void;
} 


const useFavoriteStore = create<Favorites>((set) => {
return {
    favoriteSneakers: [],
    addToAdorables: (sneaker) =>
        set((state) => ({
          favoriteSneakers: [...state.favoriteSneakers, sneaker],
        })),
    removeFromAdorables: (sneakerId) =>
        set((state) => ({
        favoriteSneakers: state.favoriteSneakers.filter((sneaker:any) => sneaker.id !== sneakerId),
        })),
 }
})

export default useFavoriteStore