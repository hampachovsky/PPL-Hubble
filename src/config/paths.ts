export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },
  profile: {
    path: "/profile/:id",
    getHref: (id: string) => `/profile/${id}`,
  },
  category: {
    path: "/category/:category",
    getHref: (category: string) => `/category/${category}`,
  },
} as const;
