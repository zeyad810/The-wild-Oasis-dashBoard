import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("logout successfully");
      queryClient.invalidateQueries({ active: true });
      queryClient.refetchQueries();
    },
    onError: (error) => {
      toast.error(error.message, "Failed to logout ");
    },
  });
  return { logout, isLoading };
}
