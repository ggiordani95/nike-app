import { create } from 'zustand';
interface Cart {
    atCart: Array<Object>;
    addToCart: (sneakerData:{}) => void;
    removeFromCart: (sneakerData:{}) => void;
    updateItemCart: any;
    specificItemId: number;
} 


const useCartStore = create<Cart>((set)=>{
    return {
        atCart: [],
        specificItemId: 0,
        addToCart: (sneakerData) =>
            set((state) => ({
              atCart: [...state.atCart, sneakerData],
            })),
        removeFromCart: (sneakerData) =>
            set((state) => ({
                atCart: state.atCart.filter((id) => id !== sneakerData),
            })),
        updateItemCart: (sneakerId: any, newQuantity: any) =>
            set((state) => ({
              atCart: state.atCart.map((sneaker: any) =>
                sneaker.id == sneakerId ? { ...sneaker, cart_quantity: sneaker.cart_quantity + newQuantity} : sneaker
              ),
        })),
            
     }
})

export default useCartStore
