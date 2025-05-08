import { useQuery } from "@tanstack/react-query";
import { getCabin } from "../../services/apiCabins";

export function useCabin() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabin,
  });
  return { isLoading, cabins, error };
}
