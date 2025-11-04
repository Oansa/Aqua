import React, { useState, useCallback } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/utils/helpers'
import { ButtonVariant, ButtonSize } from '@/types'
import { rippleVariants } from '@/utils/animations'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  liquid?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'default',
    size = 'md',
    loading = false,
    liquid = false,
    fullWidth = false,
    icon,
    iconPosition = 'left',
    children,
    disabled,
    onClick,
    ...props
  }, ref) => {
    const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

    const createRipple = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      if (!liquid) return

      const button = event.currentTarget
      const rect = button.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      const newRipple = {
        id: Date.now(),
        x,
        y,
      }

      setRipples(prev => [...prev, newRipple])

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
      }, 600)
    }, [liquid])

    const baseStyles = [
      'relative inline-flex items-center justify-center',
      'font-medium rounded-full transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-primary-aqua focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'overflow-hidden',
      fullWidth && 'w-full',
    ]

    const variantStyles = {
      default: [
        'bg-primary-aqua text-white-foam hover:bg-bright-aqua',
        'shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
      ],
      primary: [
        'bg-gradient-to-r from-primary-aqua to-bright-aqua text-white-foam',
        'aqua-glow hover:scale-105',
      ],
      secondary: [
        'bg-ocean-blue text-white-foam hover:bg-seafoam',
        'border border-seafoam',
      ],
      outline: [
        'border-2 border-primary-aqua text-primary-aqua bg-transparent',
        'hover:bg-primary-aqua hover:text-white-foam',
      ],
      ghost: [
        'text-primary-aqua hover:bg-ocean-blue/20',
        'hover:text-bright-aqua',
      ],
      liquid: [
        'bg-gradient-to-r from-primary-aqua via-bright-aqua to-light-cyan',
        'text-white-foam font-semibold',
        'shadow-xl hover:shadow-2xl transform hover:scale-105',
        'before:absolute before:inset-0 before:bg-gradient-to-r',
        'before:from-bright-aqua before:via-primary-aqua before:to-ocean-blue',
        'before:opacity-0 hover:before:opacity-100 before:transition-opacity',
        'aqua-glow',
      ],
    }

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-12 py-6 text-xl',
    }

    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-7 h-7',
    }

    const buttonClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    const MotionButton = motion.button

    return (
      <MotionButton
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={(e) => {
          createRipple(e)
          onClick?.(e)
        }}
        whileHover={{ scale: variant === 'liquid' ? 1.05 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        {...(props as MotionProps)}
      >
        {/* Liquid ripple effects */}
        {liquid && ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '20px',
              height: '20px',
              transform: 'translate(-50%, -50%)',
            }}
            variants={rippleVariants}
            initial="idle"
            animate="active"
          />
        ))}

        {/* Loading state */}
        {loading && (
          <motion.svg
            className={cn('animate-spin', iconSizes[size], 'mr-2')}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </motion.svg>
        )}

        {/* Icon */}
        {icon && iconPosition === 'left' && !loading && (
          <span className={cn(iconSizes[size], 'mr-2 flex-shrink-0')}>
            {icon}
          </span>
        )}

        {/* Button content */}
        <span className="relative z-10">
          {children}
        </span>

        {/* Icon on the right */}
        {icon && iconPosition === 'right' && !loading && (
          <span className={cn(iconSizes[size], 'ml-2 flex-shrink-0')}>
            {icon}
          </span>
        )}

        {/* Liquid overlay for hover effect */}
        {variant === 'liquid' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
        )}
      </MotionButton>
    )
  }
)

Button.displayName = 'Button'

export { Button, type ButtonProps }