import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient();  //This creates the TanStack Query client.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* makes TanStack Query available to all components inside App. */}
    <QueryClientProvider client={queryClient}>   
      <App />
    </QueryClientProvider>
  </StrictMode>
);