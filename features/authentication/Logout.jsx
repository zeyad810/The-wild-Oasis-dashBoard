import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <ButtonIcon onClick={handleLogout} disabled={isLoading}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
