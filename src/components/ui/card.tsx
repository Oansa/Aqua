import React, { useState, useRef, useCallback } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/utils/helpers'
import { CardProps } from '@/types'
import { cardHoverVariants } from '@/utils/animations'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    children,
    hover = false,
    glass = false,
    ripple = false,
    ...props
  }, ref) => {
    const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])
    const cardRef = useRef<HTMLDivElement>(null)

    const createRipple = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
      if (!ripple || !cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
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
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 800)
    }, [ripple])

    const baseStyles = [
      'rounded-2xl p-6 transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-primary-aqua focus:ring-offset-2',
    ]

    const variantStyles = {
      default: [
        'bg-card/80 backdrop-blur-sm border border-seafoam/20',
        'hover:border-primary-aqua/40',
      ],
      hover: [
        'bg-card/80 backdrop-blur-sm border border-seafoam/20',
        'hover:border-primary-aqua/40 hover:shadow-xl hover:-translate-y-1',
        'cursor-pointer',
      ],
      glass: [
        'glass border border-seafoam/20',
        'hover:border-primary-aqua/40',
      ],
    }

    const cardClasses = cn(
      baseStyles,
      glass ? variantStyles.glass : hover ? variantStyles.hover : variantStyles.default,
      className
    )

    const MotionCard = motion.div

    return (
      <MotionCard
        ref={cardRef}
        className={cardClasses}
        onClick={createRipple}
        variants={hover ? cardHoverVariants : undefined}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        {...(props as MotionProps)}
      >
        {/* Ripple effects */}
        {ripple && ripples.map(rippleItem => (
          <motion.div
            key={rippleItem.id}
            className="absolute pointer-events-none rounded-full"
            style={{
              left: rippleItem.x,
              top: rippleItem.y,
              width: '10px',
              height: '10px',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent)',
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 20, 40],
              opacity: [1, 0.5, 0]
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              times: [0, 0.5, 1]
            }}
          />
        ))}

        {/* Card content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-aqua/5 to-transparent rounded-2xl pointer-events-none" />
      </MotionCard>
    )
  }
)

Card.displayName = 'Card'

export { Card, type CardProps }