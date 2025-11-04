import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Discord, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/helpers'
import { NavItem } from '@/types'

interface FooterProps {
  className?: string
  navItems?: NavItem[]
}

const Footer = ({ className, navItems = [] }: FooterProps) => {
  const defaultNavItems: NavItem[] = [
    { label: 'Features', href: '#features' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'About', href: '#about' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Oansa/Aqua', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/aqua_protocol', label: 'Twitter' },
    { icon: <Discord className="w-5 h-5" />, href: 'https://discord.gg/aqua-protocol', label: 'Discord' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@aqua-protocol.org', label: 'Email' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('bg-deep-teal text-white-foam', className)}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-aqua to-bright-aqua rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white-foam rounded-full" />
              </div>
              <span className="text-xl font-bold">Aqua Protocol</span>
            </div>
            <p className="text-white-foam/80 max-w-sm">
              Privacy-preserving, open-source protocol for data verification and integrity.
              Crypto as cryptography, not currency.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-white-foam/60 hover:text-primary-aqua transition-colors"
                  target={blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {(navItems.length > 0 ? navItems.slice(0, 4) : defaultNavItems.slice(0, 4)).map((item, index) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    className="text-white-foam/80 hover:text-primary-aqua transition-colors"
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="https://docs.aqua-protocol.org"
                  className="text-white-foam/80 hover:text-primary-aqua transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 4 }}
                >
                  Documentation
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com/Oansa/Aqua"
                  className="text-white-foam/80 hover:text-primary-aqua transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ x: 4 }}
                >
                  GitHub Repository
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://aquafier.inblock.io"
                  className="text-white-foam/80 hover:text-primary-aqua transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 4 }}
                >
                  Live Demo
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://dorahacks.io/buidl/34912"
                  className="text-white-foam/80 hover:text-primary-aqua transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ x: 4 }}
                >
                  Bounty Program
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold">Try Aqua Today</h3>
            <p className="text-white-foam/80 mb-4">
              Experience the power of cryptographic data verification with our interactive demo.
            </p>
            <Button
              variant="primary"
              liquid
              onClick={() => window.open('https://aquafier.inblock.io', '_blank')}
              className="w-full"
            >
              Launch Aquafier Demo
            </Button>
            <p className="text-sm text-white-foam/60">
              No registration required • Free to use • Open source
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-seafoam/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-2 text-white-foam/60 text-sm">
            <span>© {currentYear} Aqua Protocol</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-primary-aqua fill-current" />
              <span>for data integrity</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-white-foam/60 text-sm">
            <a href="/privacy" className="hover:text-primary-aqua transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary-aqua transition-colors">
              Terms of Service
            </a>
            <a href="/security" className="hover:text-primary-aqua transition-colors">
              Security
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export { Footer }