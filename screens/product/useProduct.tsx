function useProduct({
  sneakerData,
  setSneakerData,
  atCartItems,
  updateItemCart,
  cartStore,
  adorables,
  removingAdorables,
  addingAdorables,
  setIsLoading,
}: any) {
  // handle selected number
  const handleSelectedNumber = (select: any) => {
    const number = Math.round(select);
    setSneakerData({ ...sneakerData, selectedNumber: number });
  };

  // handle quantity and price
  const handleQuantityAndPrice = (object: any) => {
    setSneakerData({
      ...sneakerData,
      cart_price: object.price,
      cart_quantity: object.quantity,
    });
  };

  // handle cart items
  const handleCartItems = () => {
    setIsLoading(true);
    if (atCartItems.some((item: any) => item.id === sneakerData.id)) {
      updateItemCart(sneakerData.id, sneakerData.cart_quantity);
      return;
    }
    cartStore(sneakerData);
  };

  // handle favorite item
  const handleFavItem = (isFavorite: boolean) => {
    if (isFavorite) {
      if (adorables.length < 1) {
        return;
      }
      removingAdorables(sneakerData.id);
      return;
    }
    addingAdorables(sneakerData);
  };

  return {
    handleSelectedNumber,
    handleQuantityAndPrice,
    handleCartItems,
    handleFavItem,
  };
}

export default useProduct;
