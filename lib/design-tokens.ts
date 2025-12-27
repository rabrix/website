/**
 * Design Tokens - Standardized spacing, typography, and container widths
 * Used across all components for consistency
 */

// Container max-widths
export const CONTAINER_WIDTHS = {
  narrow: 'max-w-4xl',      // 896px - Text-heavy content
  standard: 'max-w-5xl',    // 1024px - Most sections
  wide: 'max-w-6xl',        // 1152px - Hero, wide layouts
  full: 'max-w-7xl',        // 1280px - Social proof, testimonials
} as const;

// Section padding - Standardized across all sections
export const SECTION_PADDING = {
  compact: 'py-12 md:py-16',           // Compact sections
  standard: 'py-16 md:py-20 lg:py-24', // Standard sections
  hero: 'py-16 md:py-24 lg:py-32',     // Hero section
  large: 'py-20 md:py-28 lg:py-32',    // Large emphasis sections
} as const;

// Gap spacing - For grids and flex containers
export const GAP_SPACING = {
  tight: 'gap-3',      // 12px - Tight spacing
  normal: 'gap-4',    // 16px - Normal spacing
  comfortable: 'gap-6', // 24px - Comfortable spacing
  spacious: 'gap-8',  // 32px - Spacious spacing
} as const;

// Typography scale - Consistent font sizes
export const TYPOGRAPHY = {
  // Headlines
  h1: {
    mobile: 'text-4xl',      // 36px
    tablet: 'md:text-5xl',   // 48px
    desktop: 'lg:text-6xl', // 60px
    large: 'xl:text-7xl',   // 72px
    lineHeight: 'leading-tight', // 1.25
    weight: 'font-bold',     // 700
  },
  h2: {
    mobile: 'text-3xl',      // 30px
    tablet: 'md:text-4xl',   // 36px
    desktop: 'lg:text-5xl',  // 48px
    lineHeight: 'leading-tight',
    weight: 'font-bold',     // 700
  },
  h3: {
    mobile: 'text-2xl',      // 24px
    tablet: 'md:text-3xl',   // 30px
    desktop: 'lg:text-4xl', // 36px
    lineHeight: 'leading-tight',
    weight: 'font-semibold', // 600
  },
  // Body text
  body: {
    mobile: 'text-base',     // 16px
    tablet: 'md:text-lg',    // 18px
    lineHeight: 'leading-relaxed', // 1.625
    weight: 'font-normal',   // 400
  },
  bodyLarge: {
    mobile: 'text-lg',       // 18px
    tablet: 'md:text-xl',    // 20px
    desktop: 'lg:text-2xl',  // 24px
    lineHeight: 'leading-relaxed',
    weight: 'font-normal',
  },
  // Small text
  small: {
    mobile: 'text-sm',       // 14px
    tablet: 'md:text-base',  // 16px
    lineHeight: 'leading-normal', // 1.5
    weight: 'font-normal',
  },
} as const;

// Helper function to generate typography classes
export function getTypographyClasses(
  variant: keyof typeof TYPOGRAPHY,
  includeWeight = true
): string {
  const typo = TYPOGRAPHY[variant];
  const classes = [
    typo.mobile,
    typo.tablet,
    typo.desktop,
    typo.large,
    typo.lineHeight,
  ].filter(Boolean);
  
  if (includeWeight) {
    classes.push(typo.weight);
  }
  
  return classes.join(' ');
}



