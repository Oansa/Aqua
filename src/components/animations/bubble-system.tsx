import React, { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { cn } from '@/utils/helpers'
import { bubbleVariants } from '@/utils/animations'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

interface BubbleSystemProps {
  className?: string
  bubbleCount?: number
  enabled?: boolean
  color?: 'aqua' | 'white' | 'mixed'
}

const BubbleSystem = ({
  className,
  bubbleCount = 15,
  enabled = true,
  color = 'mixed'
}: BubbleSystemProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })

  // Update container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Generate bubbles
  const generateBubbles = useCallback(() => {
    if (!enabled || dimensions.width === 0 || dimensions.height === 0) return []

    const newBubbles: Bubble[] = []

    for (let i = 0; i < bubbleCount; i++) {
      const size = Math.random() * 20 + 10 // 10-30px
      const duration = Math.random() * 4 + 6 // 6-10s
      const delay = Math.random() * 5 // 0-5s delay
      const x = Math.random() * dimensions.width
      const y = dimensions.height + size // Start from bottom
      const opacity = Math.random() * 0.3 + 0.1 // 0.1-0.4 opacity

      newBubbles.push({
        id: i,
        x,
        y,
        size,
        duration,
        delay,
        opacity
      })
    }

    return newBubbles
  }, [bubbleCount, dimensions, enabled])

  // Initialize and update bubbles
  useEffect(() => {
    setBubbles(generateBubbles())
  }, [generateBubbles])

  // Regenerate bubbles periodically for variety
  useEffect(() => {
    if (!enabled) return

    const interval = setInterval(() => {
      setBubbles(generateBubbles())
    }, 15000) // Regenerate every 15 seconds

    return () => clearInterval(interval)
  }, [generateBubbles, enabled])

  const getBubbleColor = (bubble: Bubble) => {
    switch (color) {
      case 'aqua':
        return 'bg-primary-aqua'
      case 'white':
        return 'bg-white-foam'
      case 'mixed':
        return bubble.id % 3 === 0 ? 'bg-primary-aqua' :
               bubble.id % 3 === 1 ? 'bg-bright-aqua' : 'bg-light-cyan'
      default:
        return 'bg-primary-aqua'
    }
  }

  const containerClasses = cn(
    'absolute inset-0 overflow-hidden pointer-events-none',
    className
  )

  return (
    <div ref={containerRef} className={containerClasses}>
      <AnimatePresence>
        {isInView && enabled && bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className={cn(
              'absolute rounded-full',
              getBubbleColor(bubble),
              'blur-sm'
            )}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.x,
              top: bubble.y,
              opacity: bubble.opacity,
            }}
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Decorative wave effects */}
      <svg
        className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <motion.path
          fill="#06b6d4"
          fillOpacity="0.3"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </svg>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/20 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

export { BubbleSystem }