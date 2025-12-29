// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./i18n";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import router from "./Router/Router";
// import { RouterProvider } from "react-router-dom";
// const queryClient = new QueryClient();

// createRoot(document.getElementById("root")).render(
//     <QueryClientProvider client={queryClient}>
//       <RouterProvider router={router}>
//         <App />
//       </RouterProvider>
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// -------------------------------------------------------------------------
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);


