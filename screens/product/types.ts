export interface ISneaker {
    id: number | null;
    name: string | null;
    desc: string | null;
    image: string | null;
    price: number | null;
    selectedNumber: number | null;
    cart_price: number | null;
    cart_quantity: number;
}