const MINUTE = 1000 * 60;

export const constants = {
  GC_TIMES: {
    PROFILE_GC: MINUTE * 11,
    POSTS_BY_GC: MINUTE * 10,
    POST_BY_GC: MINUTE * 5,
  },
  STALE_TIMES: {
    DEFAULT_STALE: MINUTE,
    PROFILE_STALE: MINUTE * 10,
    POSTS_BY_STALE: MINUTE * 5,
    POST_BY_STALE: MINUTE * 4,
    CATEGORIES_STALE: MINUTE * 30,
    CURRENT_USER_STALE: MINUTE * 10,
  },
  QUERY_KEYS: {
    CATEGORIES: "categories",
    POSTS: "posts",
    USER: "user",
    PROFILES: "profiles",
    PROFILE: "profile",
    PROFILE_AVATAR: "profileAvatar",
    SINGLE_POST: "post",
    COMMENTS: "comments",
  },
  CATEGORY_TABS: ["Posts", "Rules"],
  PROFILE_TABS: ["My Posts", "Subscriptions"],
} as const;
