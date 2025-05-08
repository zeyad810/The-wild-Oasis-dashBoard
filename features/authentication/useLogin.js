import { useMutation   } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success("Login successfully");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Login failed");
    },
  });

  return { login, isLoading };
}
