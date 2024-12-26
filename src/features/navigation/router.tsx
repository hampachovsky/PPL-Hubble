import { AppLayout, NotFound } from "@/components";
import { paths } from "@/config/paths";
import { CategoryPage } from "@/pages/CategoryPage";
import { HomePage } from "@/pages/HomePage";
import { ProfilePage } from "@/pages/ProfilePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: paths.home.path, element: <HomePage /> },
      { path: paths.profile.path, element: <ProfilePage /> },
      { path: paths.category.path, element: <CategoryPage /> },
    ],
  },
  { element: <NotFound />, path: "*" },
]);
