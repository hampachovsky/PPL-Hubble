export const paths = {
  popular: {
    path: "/",
    getHref: () => "/",
  },
  new: {
    path: "/new",
    getHref: () => "/new",
  },
  bookmarked: {
    path: "/bookmarked",
    getHref: () => "/bookmarked",
  },
  subscriptions: {
    path: "/subscriptions",
    getHref: () => "/subscriptions",
  },
  profile: {
    path: "/profile/:id",
    getHref: (id: string) => `/profile/${id}`,
  },
  category: {
    path: "/category/:category",
    getHref: (category: string) => `/category/${category}`,
  },
  settings: {
    path: "/settings",
    getHref: () => "/settings",
  },
} as const;
