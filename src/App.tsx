import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NewsPage from "./pages/news/NewsPage";
import NewsDetail from "./pages/news/NewsDetail";
import TrainingProgramsList from "./pages/training/TrainingPage";
import TrainingDetailPage from "./pages/training/TrainingDetailPage";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "./hooks/authContext";
import SignInPage from "./pages/auth/SignInPage";
import { ProtectedRoute } from "./lib/ProtectedRoutes";

const queryClient = new QueryClient();

// Component to handle sign-in page redirect
const SignInRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <SignInPage />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public route */}
            <Route path="/sign-in" element={<SignInRoute />} />

            {/* Protected routes */}
            <Route path="/" element={<Index />} />
            <Route
              path="/news"
              element={
                <ProtectedRoute>
                  <NewsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/news/:id"
              element={
                <ProtectedRoute>
                  <NewsDetail />
                </ProtectedRoute>
              }
            />
            <Route path="/training" element={<TrainingProgramsList />} />
            <Route path="/training/:slug" element={<TrainingDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
