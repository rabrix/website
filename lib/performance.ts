/**
 * Performance utilities for optimizing animations and interactions
 */

/**
 * Check if user prefers reduced motion
 * Use this to disable or reduce animations for better accessibility and performance
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Throttle function for scroll/resize handlers
 * Ensures function doesn't fire more than once per frame
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number = 16
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Debounce function for input handlers
 * Delays function execution until after wait time
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function (this: any, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Check if device is mobile
 * Useful for reducing animations/effects on mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

/**
 * Get animation duration based on user preferences and device
 * Returns shorter duration for reduced motion or mobile
 */
export function getAnimationDuration(baseDuration: number = 0.6): number {
  if (prefersReducedMotion()) return 0.1;
  if (isMobileDevice()) return baseDuration * 0.7;
  return baseDuration;
}



