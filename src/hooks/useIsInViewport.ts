import { useEffect, useState } from "react";

export const useIsInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: "50px" }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref]);

  return isInViewport;
};
