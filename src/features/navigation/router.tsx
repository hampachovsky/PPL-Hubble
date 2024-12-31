import { AppLayout, NotFound } from "@/components";
import { paths } from "@/config";
import { PostsList } from "@/features/post";
import { ProfilePage } from "@/pages/ProfilePage";
import { SingleCategoryPage } from "@/pages/SingleCategoryPage";
import { UserFeedPage } from "@/pages/UserFeedPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: paths.popular.path,
        element: <UserFeedPage />,
        children: [
          {
            path: paths.popular.path,
            element: <PostsList category="popular" />,
          },
          { path: paths.new.path, element: <PostsList category="new" /> },
          {
            path: paths.bookmarked.path,
            element: <PostsList category="bookmarked" />,
          },
          {
            path: paths.subscriptions.path,
            element: <PostsList category="subscriptions" />,
          },
        ],
      },
      { path: paths.profile.path, element: <ProfilePage /> },
      { path: paths.category.path, element: <SingleCategoryPage /> },
    ],
  },
  { element: <NotFound />, path: "*" },
]);
