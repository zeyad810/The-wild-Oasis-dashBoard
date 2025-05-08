import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-50);
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // step 1 Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();
  // step 2 If No  authenticated user  redirect to the /Login page

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // step 3 while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // step 4 If there is user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
