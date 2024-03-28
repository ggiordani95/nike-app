import { Dispatch, SetStateAction, useState } from "react";

function useLoading(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return [isLoading, setIsLoading];
}

export default useLoading;
