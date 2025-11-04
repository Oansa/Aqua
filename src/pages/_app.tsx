import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="min-h-screen bg-deep-teal text-white-foam">
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 }
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MyApp