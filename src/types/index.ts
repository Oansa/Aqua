/**
 * Base props for UI components
 */
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

/**
 * Button variants and sizes
 */
export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'liquid'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

/**
 * Card props
 */
export interface CardProps extends BaseComponentProps {
  hover?: boolean
  glass?: boolean
  ripple?: boolean
}

/**
 * Navigation item
 */
export interface NavItem {
  label: string
  href: string
  external?: boolean
  icon?: React.ReactNode
}

/**
 * Use case data structure
 */
export interface UseCase {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  demo?: {
    title: string
    description: string
    action: string
  }
}

/**
 * Team member data
 */
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar?: string
  links?: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

/**
 * Technical specification
 */
export interface TechSpec {
  id: string
  title: string
  description: string
  details: string[]
  icon: React.ReactNode
}

/**
 * Social proof data
 */
export interface SocialProof {
  githubStars: number
  contributors: number
  downloads?: number
  communityMembers?: number
}

/**
 * Analytics event data
 */
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
  }
  animations: {
    enabled: boolean
    reducedMotion: boolean
  }
}

/**
 * Animation configuration
 */
export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: string
  repeat?: number | 'infinite'
}

/**
 * Responsive breakpoint
 */
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

/**
 * Device information
 */
export interface DeviceInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  prefersReducedMotion: boolean
}

/**
 * SEO metadata
 */
export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

/**
 * Performance metrics
 */
export interface PerformanceMetrics {
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  fcp: number // First Contentful Paint
  ttfb: number // Time to First Byte
}