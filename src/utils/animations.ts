import { motion, Variants, MotionProps } from 'framer-motion'
import { prefersReducedMotion } from './helpers'

/**
 * Animation variants that respect user's motion preferences
 */
export const createMotionVariants = <T extends Record<string, any>>(variants: T): T => {
  if (prefersReducedMotion()) {
    // Return simplified variants for users who prefer reduced motion
    return Object.keys(variants).reduce((acc, key) => {
      acc[key] = typeof variants[key] === 'object' ? { ...variants[key], transition: { duration: 0 } } : variants[key]
      return acc
    }, {} as T)
  }
  return variants
}

/**
 * Container animation for staggered children animations
 */
export const containerVariants = createMotionVariants({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
})

/**
 * Item animation for staggered children
 */
export const itemVariants = createMotionVariants({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
})

/**
 * Fade in animation variants
 */
export const fadeInVariants = createMotionVariants({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
})

/**
 * Slide up animation variants
 */
export const slideUpVariants = createMotionVariants({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
      duration: 0.8,
    },
  },
})

/**
 * Scale animation variants
 */
export const scaleVariants = createMotionVariants({
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
})

/**
 * Liquid ripple animation for button clicks
 */
export const rippleVariants = createMotionVariants({
  idle: { scale: 0, opacity: 0.8 },
  active: {
    scale: 4,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
})

/**
 * Wave animation for hero text
 */
export const waveVariants = createMotionVariants({
  initial: { scaleY: 1 },
  animate: {
    scaleY: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
})

/**
 * Bubble floating animation
 */
export const bubbleVariants = createMotionVariants({
  initial: {
    y: 100,
    opacity: 0,
    scale: 0,
  },
  animate: {
    y: -100,
    opacity: [0, 0.8, 0.8, 0],
    scale: [0, 1, 1, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      times: [0, 0.1, 0.9, 1],
    },
  },
})

/**
 * Glow pulse animation for interactive elements
 */
export const glowPulseVariants = createMotionVariants({
  initial: {
    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(6, 182, 212, 0.3)',
      '0 0 30px rgba(6, 182, 212, 0.6)',
      '0 0 20px rgba(6, 182, 212, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
})

/**
 * Card hover animation
 */
export const cardHoverVariants = createMotionVariants({
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
})

/**
 * Navigation menu animation
 */
export const menuVariants = createMotionVariants({
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
})

/**
 * Page transition animation
 */
export const pageTransition = createMotionVariants({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: 'easeIn' }
  },
})

/**
 * Custom hook for intersection observer to trigger animations
 */
export const useInViewAnimation = () => {
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-100px' },
  }
}

/**
 * Props for animated components
 */
export interface AnimatedComponentProps extends MotionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

/**
 * Animation delay utility
 */
export const withDelay = (variants: any, delay: number) => {
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        delay,
      },
    },
  }
}