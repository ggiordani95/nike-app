import { create } from 'zustand';

interface Cart {
    atCart: Array<Object>;
    addToCart: (sneakerData:{}) => void;
    removeFromCart: (sneakerData:{}) => void;
} 


const useCartStore = create<Cart>((set)=>{
    return {
        atCart: [],
        addToCart: (sneakerData) =>
            set((state) => ({
              atCart: [...state.atCart, sneakerData],
            })),
        removeFromCart: (sneakerData) =>
            set((state) => ({
                atCart: state.atCart.filter((id) => id !== sneakerData),
            })),
     }
})

export default useCartStore
