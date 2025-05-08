import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// ? Styles imports
import GlobalStyled from "./styles/GlobalStyled";
//! UI Imports
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <GlobalStyled />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="users" element={<Users />} />
              <Route path="account" element={<Account />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 4000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
