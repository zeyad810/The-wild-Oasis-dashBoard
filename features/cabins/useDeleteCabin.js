import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin Successfully deleted");
      queryClient.invalidateQueries(["cabin"]);
    },
    onError: (err) => toast.error(err),
  });
  return { isDeleting, deleteCabin };
}
export default useDeleteCabin;
