import { useState, useEffect, RefObject } from 'react';

/**
 * Custom hook to detect when an element is in the viewport
 * @param ref - React ref object pointing to the target element
 * @param threshold - Visibility threshold (0-1)
 * @returns boolean indicating whether element is in viewport
 */
export const useInView = (ref: RefObject<HTMLElement>, threshold = 0.1): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [ref, threshold]);

  return isInView;
};

/**
 * Custom hook to detect scroll position
 * @returns Current scroll position in pixels
 */
export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

/**
 * Custom hook to detect window size
 * @returns Object containing window width and height
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};