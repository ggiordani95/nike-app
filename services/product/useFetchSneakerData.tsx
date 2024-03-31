import { Dispatch, SetStateAction, useEffect } from "react";
import { AllShoesData } from "../allshoes";

type useFetchSneakerDataProps<T> = {
  setIsLoading: (value: boolean) => void;
  currentSneakerIdToFetch: number | null;
  setSneakerData: Dispatch<SetStateAction<T>>;
};

function isValidSneakerData(data: unknown) {
  return typeof data === "object" && data !== null && "property" in data;
}

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
          const fetchedSneakerData: unknown = await AllShoesData(
            true,
            currentSneakerIdToFetch
          );
          if (isValidSneakerData(fetchedSneakerData)) {
            setSneakerData(fetchedSneakerData as T);
          } else {
            console.error("Dados inválidos do sneaker");
          }
          console.log(fetchedSneakerData);
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
