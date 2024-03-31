import { useEffect } from "react";
import { ISneaker } from "../../screens/product/types";

interface Props {
  adorables: Array<any>;
  sneakerData: ISneaker;
  setIsFavorite: (isFavorite: boolean) => void;
}

function useProductIsFavorite({
  adorables,
  sneakerData,
  setIsFavorite,
}: Props) {
  useEffect(() => {
    const isFav = adorables.find(
      (sneaker: ISneaker) => sneaker.id === sneakerData.id
    );
    setIsFavorite(!!isFav);
  }, [adorables, sneakerData.id]);
  return;
}

export default useProductIsFavorite;
