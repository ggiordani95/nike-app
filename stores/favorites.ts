import { create } from 'zustand';

interface IFavorites {
    favoriteSneakers: Array<Object>;
    addToAdorables: (sneaker:{}) => void;
    removeFromAdorables: (sneakerId:number | null) => void;
} 

const useFavoriteStore = create<IFavorites>((set) => {
return {
    favoriteSneakers: [],
    // add to favorites
    addToAdorables: (sneaker) =>
        set((state) => ({
          favoriteSneakers: [...state.favoriteSneakers, sneaker],
        })),
    // remove to favorites    
    removeFromAdorables: (sneakerId) =>
        set((state) => ({
        favoriteSneakers: state.favoriteSneakers.filter((sneaker:any) => sneaker.id !== sneakerId),
        })),
 }
})

export default useFavoriteStore