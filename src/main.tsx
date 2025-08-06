import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Start from "./pages/start/Start.tsx";
import Main from "./pages/main/Main.tsx";
import Setup from "./pages/setup/Setup.tsx";
import Tracker from "./pages/tracker/tracker.tsx";
import Book from "./pages/book/book.tsx";
import NewRide from "./pages/new-ride/new-ride.tsx";
import Settings from "./pages/settings/settings.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Start /> },
  { path: "/main", element: <Main /> },
  { path: "/setup", element: <Setup /> },
  { path: "/tracker", element: <Tracker /> },
  { path: "/book", element: <Book /> },
  { path: "/new-ride", element: <NewRide /> },
  { path: "/settings", element: <Settings /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
