/**
 * Set up intersection observer for fade-in animations
 * @param targetSelector - CSS selector for target elements
 */
export const setupFadeInObserver = (targetSelector: string = '.fade-in') => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        // Optional: Unobserve after animation is triggered
        // fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll(targetSelector);
  targets.forEach(target => fadeInObserver.observe(target));

  return fadeInObserver;
};

/**
 * Smooth scroll to element by ID
 * @param id - Element ID to scroll to
 * @param offset - Offset from the top in pixels
 */
export const scrollToElement = (id: string, offset: number = 0) => {
  const element = document.getElementById(id);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Detect current section in viewport
 * @param sectionIds - Array of section IDs to check
 * @returns The ID of the current section in view
 */
export const getCurrentSection = (sectionIds: string[]): string | null => {
  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (!section) continue;
    
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if section is in viewport
    if (
      rect.top <= windowHeight / 2 &&
      rect.bottom >= windowHeight / 2
    ) {
      return id;
    }
  }
  
  return null;
};