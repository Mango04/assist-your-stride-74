import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Messages from "./pages/Messages";
import Team from "./pages/Team";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout title="Project Dashboard"><Index /></Layout>} />
          <Route path="/messages" element={<Layout title="Messages"><Messages /></Layout>} />
          <Route path="/team" element={<Layout title="Team Management"><Team /></Layout>} />
          <Route path="/analytics" element={<Layout title="Analytics"><Analytics /></Layout>} />
          <Route path="/calendar" element={<Layout title="Calendar"><Calendar /></Layout>} />
          <Route path="/settings" element={<Layout title="Settings"><Settings /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
