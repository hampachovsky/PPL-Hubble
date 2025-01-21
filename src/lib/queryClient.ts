import { constants } from "@/config";
import { DefaultOptions } from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    // throwOnError: true,
    // refetchOnWindowFocus: false,
    retry: false,
    staleTime: constants.STALE_TIMES.DEFAULT_STALE,
  },
} satisfies DefaultOptions;
