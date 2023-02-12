import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import App from "./App";
import { Suspense } from "react";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <Suspense fallback={<h3>Loading...</h3>}>
    <App />
    </Suspense>
    </QueryClientProvider>
    </BrowserRouter>
);