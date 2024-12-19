import { AppLayout, NotFound } from "@/components";
import { ROUTES } from "@/config/paths";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: `${ROUTES.PROFILE}/:id`, element: <Profile /> },
    ],
  },
  { element: <NotFound />, path: "*" },
]);
