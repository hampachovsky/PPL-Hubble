import { AppLayout, NotFound, UserFeedLayout } from "@/components";
import { paths } from "@/config";
import { ProtectedRoute } from "@/features/navigation";
import { PostEditorPage } from "@/pages/PostEditorPage";
import { PostPage } from "@/pages/PostPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { SettingsPage } from "@/pages/SettingsPage";
import { SingleCategoryPage } from "@/pages/SingleCategoryPage";
import { UserFeedPage } from "@/pages/UserFeedPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: paths.popular.path,
        element: <UserFeedLayout />,
        children: [
          {
            path: paths.popular.path,
            element: <UserFeedPage filterCriteria="popular" />,
          },
          {
            path: paths.new.path,
            element: <UserFeedPage filterCriteria="new" />,
          },
          {
            path: paths.bookmarked.path,
            element: <UserFeedPage filterCriteria="bookmarked" />,
          },
          {
            path: paths.subscriptions.path,
            element: <UserFeedPage filterCriteria="subscriptions" />,
          },
        ],
      },
      { path: paths.profile.path, element: <ProfilePage /> },
      { path: paths.post.path, element: <PostPage /> },
      { path: paths.category.path, element: <SingleCategoryPage /> },
      {
        path: paths.settings.path,
        element: (
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: paths.postEditor.path,
        element: (
          <ProtectedRoute>
            <PostEditorPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { element: <NotFound />, path: "*" },
]);
