import { create } from 'zustand';

interface ICart {
    atCart: Array<Object>;
    addToCart: (sneakerData:{}) => void;
    removeFromCart: (sneakerData:{}) => void;
    removeAllItems: () => void;
    updateItemCart: (sneakerId: number, newQuantity: number, priceAdded: number) => void
    specificItemId: number;
} 

const useCartStore = create<ICart>((set)=>{
    return {
        atCart: [],
        specificItemId: 0,
        // adding to cart
        addToCart: (sneakerData) =>
            set((state) => ({
              atCart: [...state.atCart, sneakerData],
            })),
        // removing to cart    
        removeFromCart: (sneakerData) =>
            set((state) => ({
                atCart: state.atCart.filter((id) => id !== sneakerData),
            })),
        // updating cart items    
        updateItemCart: (sneakerId: number, newQuantity: number, priceAdded: number) =>
            set((state) => ({
              atCart: state.atCart.map((sneaker: any) =>
                sneaker.id == sneakerId ? { ...sneaker, cart_quantity: sneaker.cart_quantity + newQuantity} : sneaker
              ),
        })),
        // remove all items in cart
        removeAllItems: () => set((state)=>({ atCart: []}))
            
     }
})

export default useCartStore
