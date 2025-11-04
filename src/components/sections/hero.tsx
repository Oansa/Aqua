import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, FileCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BubbleSystem } from '@/components/animations/bubble-system'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utils/helpers'
import {
  fadeInVariants,
  slideUpVariants,
  scaleVariants,
  useInViewAnimation,
  containerVariants,
  itemVariants
} from '@/utils/animations'

interface HeroProps {
  className?: string
}

const Hero = ({ className }: HeroProps) => {
  const viewAnimation = useInViewAnimation()

  const trustBadges = [
    { icon: <Shield className="w-4 h-4" />, text: "Open Source" },
    { icon: <FileCheck className="w-4 h-4" />, text: "Audited" },
    { icon: <Zap className="w-4 h-4" />, text: "Production Ready" },
  ]

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        'fluid-gradient-primary text-white-foam',
        className
      )}
      id="hero"
    >
      {/* Animated bubble system */}
      <BubbleSystem bubbleCount={20} color="mixed" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            {...viewAnimation}
            variants={fadeInVariants}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                variants={scaleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  size="md"
                  className="glass backdrop-blur-sm"
                >
                  <span className="flex items-center space-x-2">
                    {badge.icon}
                    <span>{badge.text}</span>
                  </span>
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="fluid-xl font-bold mb-6 text-shadow-strong"
            {...viewAnimation}
            variants={slideUpVariants}
          >
            <span className="wave-text">Crypto as Cryptography,</span>
            <br />
            <span className="text-bright-aqua">Not Currency</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="fluid-lg mb-10 text-white-foam/90 max-w-2xl mx-auto text-shadow-aqua"
            {...viewAnimation}
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            Privacy-preserving protocol for data verification and integrity.
            Secure, open-source, and built for the future of digital trust.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            {...viewAnimation}
            variants={slideUpVariants}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="liquid"
              size="xl"
              liquid
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              onClick={() => window.open('https://aquafier.inblock.io', '_blank')}
              className="min-w-[200px]"
            >
              Try Aquafier Demo
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={() => window.open('https://github.com/Oansa/Aqua', '_blank')}
              className="min-w-[200px] border-white-foam text-white-foam hover:bg-white-foam hover:text-deep-teal"
            >
              View Documentation
            </Button>
          </motion.div>

          {/* Key differentiators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            {...viewAnimation}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Privacy First",
                description: "Zero-knowledge proofs ensure your data remains confidential while being verified",
              },
              {
                title: "Open Protocol",
                description: "Completely open-source with transparent cryptographic standards",
              },
              {
                title: "Enterprise Ready",
                description: "Production-tested with comprehensive security audits and performance benchmarks",
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="glass rounded-2xl p-6 backdrop-blur-sm border border-seafoam/20 hover:border-primary-aqua/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-bright-aqua">
                  {feature.title}
                </h3>
                <p className="text-white-foam/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-6 h-10 border-2 border-white-foam/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white-foam/70 rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/30 via-transparent to-ocean-blue/30 pointer-events-none" />

      {/* Subtle animated pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`,
          animation: 'gradient-shift 15s ease-in-out infinite'
        }} />
      </div>
    </section>
  )
}

export { Hero }