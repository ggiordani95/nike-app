import useCartStore from "../../stores/cart";
import useFavoriteStore from "../../stores/favorites";

function useProductStore() {
  // cartStore
  const atCart = useCartStore((state) => state.atCart);
  const removingAdorables = useFavoriteStore(
    (state) => state.removeFromAdorables
  );
  const atCartItems = useCartStore((state) => state.atCart);
  const updateItemCart = useCartStore((state) => state.updateItemCart);
  const cartStore = useCartStore((state) => state.addToCart);

  // favoriteStore
  const addingAdorables = useFavoriteStore((state) => state.addToAdorables);
  const adorables = useFavoriteStore((state) => state.favoriteSneakers);

  return {
    atCart,
    removingAdorables,
    addingAdorables,
    adorables,
    cartStore,
    atCartItems,
    updateItemCart,
  };
}

export default useProductStore;
