import { AppLayout, NotFound } from "@/components";
import { Home } from "@/pages/Home";
import { createBrowserRouter } from "react-router";
import { ROUTES } from "./constants";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: ROUTES.HOME, element: <Home /> }],
  },
  { element: <NotFound />, path: "*" },
]);
