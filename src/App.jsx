import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { Toaster } from "react-hot-toast"
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import { SearchQueryProvider } from "./contexts/SearchQueryContext"
import Dashboard from "./pages/Dashboard"
import History from "./pages/History"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Update from "./pages/Update"
import AppLayout from "./ui/AppLayout"
import ProtectedRoute from "./ui/ProtectedRoute"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <SearchQueryProvider>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/update/:doctor_id" element={<Update />} />
              <Route path="/history" element={<History />} />
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </SearchQueryProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "800px",
            padding: "16px 24px",
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default App
