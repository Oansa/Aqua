/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Primary Teal Ocean Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#06b6d4', // Primary Aqua
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#0e7490', // Ocean Blue
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#14b8a6', // Seafoam
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#22d3ee', // Bright Aqua
          foreground: '#ffffff',
        },
        popover: {
          DEFAULT: '#0891b2', // Deep Teal Base
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: 'rgba(14, 116, 144, 0.8)', // Ocean Blue with transparency
          foreground: '#ffffff',
        },
        // Custom Aqua Colors
        'deep-teal': '#0891b2',
        'primary-aqua': '#06b6d4',
        'bright-aqua': '#22d3ee',
        'light-cyan': '#67e8f9',
        'ocean-blue': '#0e7490',
        'seafoam': '#14b8a6',
        'wave-blue': '#0284c7',
        'white-foam': '#ffffff',
        // Semantic Colors
        'success-teal': '#10b981',
        'warning-amber': '#f59e0b',
        'error-red': '#ef4444',
        'info-teal': '#0891b2',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        'fluid-xl': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2' }],
        'fluid-lg': ['clamp(1.25rem, 3vw, 1.875rem)', { lineHeight: '1.3' }],
        'fluid-base': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.5' }],
        'fluid-sm': ['clamp(0.875rem, 1.5vw, 1rem)', { lineHeight: '1.6' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out',
        'bubble-rise': 'bubble-rise 8s ease-in-out infinite',
        'liquid-fill': 'liquid-fill 0.6s ease-out',
        'aqua-glow': 'aqua-glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0) scaleX(1)' },
          '50%': { transform: 'translateX(-25px) scaleX(1.1)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'bubble-rise': {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { transform: 'translateY(90vh) scale(1)', opacity: '0.8' },
          '90%': { transform: 'translateY(10vh) scale(1)', opacity: '0.8' },
          '100%': { transform: 'translateY(-10vh) scale(0)', opacity: '0' },
        },
        'liquid-fill': {
          '0%': { transform: 'scaleX(0)', opacity: '0.5' },
          '50%': { transform: 'scaleX(1.05)', opacity: '0.8' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        'aqua-glow': {
          '0%': {
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)'
          },
          '100%': {
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.3)'
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}