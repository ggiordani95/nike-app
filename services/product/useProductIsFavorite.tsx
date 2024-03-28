import { useEffect } from "react";

function useProductIsFavorite({ adorables, sneakerData, setIsFavorite }: any) {
  useEffect(() => {
    const isFav = adorables.find(
      (sneaker: any) => sneaker.id === sneakerData.id
    );
    setIsFavorite(!!isFav);
  }, [adorables, sneakerData.id]);
  return;
}

export default useProductIsFavorite;
