import { Dispatch, SetStateAction, useEffect } from "react";
import { AllShoesData } from "../allshoes";
import { ISneaker } from "../../screens/product/types";

type useFetchSneakerDataProps<T> = {
  setIsLoading: (value: boolean) => void;
  currentSneakerIdToFetch: number | null;
  setSneakerData: Dispatch<SetStateAction<ISneaker>>;
};

function useFetchSneakerData<T>({
  setIsLoading,
  currentSneakerIdToFetch,
  setSneakerData,
}: useFetchSneakerDataProps<T>) {
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (currentSneakerIdToFetch) {
          const fetchedSneakerData: any = await AllShoesData(
            true,
            currentSneakerIdToFetch
          );
          console.log(fetchedSneakerData);
          setSneakerData(fetchedSneakerData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentSneakerIdToFetch]);

  return {};
}

export default useFetchSneakerData;
