import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/helpers'
import { BaseComponentProps } from '@/types'

interface BadgeProps extends BaseComponentProps {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

const Badge = ({
  className,
  children,
  variant = 'default',
  size = 'md',
  animated = false,
  ...props
}: BadgeProps) => {
  const baseStyles = [
    'inline-flex items-center justify-center rounded-full font-medium',
    'transition-all duration-200',
  ]

  const variantStyles = {
    default: [
      'bg-primary-aqua/20 text-primary-aqua border border-primary-aqua/30',
    ],
    secondary: [
      'bg-ocean-blue/20 text-ocean-blue border border-ocean-blue/30',
    ],
    success: [
      'bg-success-teal/20 text-success-teal border border-success-teal/30',
    ],
    warning: [
      'bg-warning-amber/20 text-warning-amber border border-warning-amber/30',
    ],
    error: [
      'bg-error-red/20 text-error-red border border-error-red/30',
    ],
  }

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  const badgeClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  const Component = animated ? motion.div : 'div'

  return (
    <Component
      className={badgeClasses}
      {...(animated && {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: 'spring', stiffness: 200, damping: 15 }
      })}
      {...props}
    >
      {children}
    </Component>
  )
}

export { Badge, type BadgeProps }