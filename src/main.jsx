import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,     // 5 دقائق البيانات تعتبر fresh
      gcTime: 1000 * 60 * 30,       // الكاش يتخزن 30 دقيقة
      refetchOnWindowFocus: false,  // ما يعملش refetch كل ما ترجع للتبويب
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);