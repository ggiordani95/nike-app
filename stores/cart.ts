import { create } from 'zustand';

interface Cart {
    atCart: Array<number>;
    addToCart: (sneakerId:number) => void;
    removeFromCart: (sneakerId:number) => void;
} 


const useCartStore = create<Cart>((set)=>{
    return {
        atCart: [],
        addToCart: (sneakerId) =>
            set((state) => ({
              atCart: [...state.atCart, sneakerId],
            })),
        removeFromCart: (sneakerId) =>
            set((state) => ({
                atCart: state.atCart.filter((id) => id !== sneakerId),
            })),
     }
})

export default useCartStore
