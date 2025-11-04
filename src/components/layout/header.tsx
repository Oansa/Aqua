import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Twitter, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/helpers'
import { NavItem } from '@/types'
import { menuVariants } from '@/utils/animations'

interface HeaderProps {
  className?: string
  navItems?: NavItem[]
}

const Header = ({ className, navItems = [] }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const defaultNavItems: NavItem[] = [
    { label: 'Features', href: '#features' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'About', href: '#about' },
    { label: 'Documentation', href: '#docs' },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Oansa/Aqua', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/aqua_protocol', label: 'Twitter' },
    { icon: <Discord className="w-5 h-5" />, href: 'https://discord.gg/aqua-protocol', label: 'Discord' },
  ]

  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled
      ? 'glass shadow-lg'
      : 'bg-transparent',
    className
  )

  const navItemClasses = cn(
    'relative px-4 py-2 text-white-foam hover:text-primary-aqua',
    'transition-colors duration-200 font-medium',
    'after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5',
    'after:bg-primary-aqua after:transition-all after:duration-300',
    'hover:after:w-8 hover:after:left-1/2 hover:after:-translate-x-1/2'
  )

  return (
    <motion.header
      className={headerClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-2 text-white-foam hover:text-primary-aqua transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-aqua to-bright-aqua rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white-foam rounded-full" />
            </div>
            <span className="text-xl font-bold">Aqua Protocol</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {(navItems.length > 0 ? navItems : defaultNavItems).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={navItemClasses}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA and Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-white-foam/70 hover:text-primary-aqua transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open('https://aquafier.inblock.io', '_blank')}
            >
              Try Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white-foam hover:text-primary-aqua transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden mt-4 glass rounded-2xl p-6"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col space-y-4">
                {(navItems.length > 0 ? navItems : defaultNavItems).map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'text-white-foam hover:text-primary-aqua transition-colors font-medium py-2',
                      'block text-lg'
                    )}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <div className="flex items-center space-x-4 pt-4 border-t border-seafoam/20">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="text-white-foam/70 hover:text-primary-aqua transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    liquid
                    onClick={() => {
                      setIsOpen(false)
                      window.open('https://aquafier.inblock.io', '_blank')
                    }}
                  >
                    Try Aquafier Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export { Header }
