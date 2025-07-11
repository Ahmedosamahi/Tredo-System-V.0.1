
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateOrderModalsProvider } from "@/hooks/useCreateOrderModals";
import Index from "./pages/Index";
import Orders from "./pages/Orders";
import Warehouse from "./pages/Warehouse";
import Customers from "./pages/Customers";
import Couriers from "./pages/Couriers";
import Financial from "./pages/Financial";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import CrmCustomerService from "./pages/CrmCustomerService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CreateOrderModalsProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Index />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/couriers" element={<Couriers />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/reports" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/crm-customer-service" element={<CrmCustomerService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CreateOrderModalsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
