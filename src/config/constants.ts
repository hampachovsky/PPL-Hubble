const MINUTE = 1000 * 60;

export const constants = {
  GC_TIMES: {
    PROFILE_GC: MINUTE * 11,
    POSTS_BY_GC: MINUTE * 10,
    POST_BY_GC: MINUTE * 5,
    SETTINGS_GC: MINUTE * 3,
  },
  STALE_TIMES: {
    DEFAULT_STALE: MINUTE,
    PROFILE_STALE: MINUTE * 10,
    POSTS_BY_STALE: MINUTE * 5,
    POST_BY_STALE: MINUTE * 4,
    CATEGORIES_STALE: MINUTE * 30,
    CURRENT_USER_STALE: MINUTE * 10,
    SETTINGS_STALE: MINUTE * 50,
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
    SETTINGS: "settings",
  },
  BUCKETS: {
    AVATARS: "avatars",
    BANNERS: "banners",
    POST_IMAGES: "post_images",
  },
  CATEGORY_TABS: ["Posts", "Rules"],
  PROFILE_TABS: ["My Posts", "Subscriptions"],
  MAX_COMMENT_DEPTH: 3,
  MAX_IMAGE_SIZE: 5 * 1024 * 1024,
} as const;
