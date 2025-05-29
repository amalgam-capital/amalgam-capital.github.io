/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './*.md',
    './*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Custom brand colors with variations
        brand: {
          // Dark color variations
          'dark-50': '#f8f8f9',     // Very light tint
          'dark-100': '#e8e9eb',    // Light tint
          'dark-200': '#c5c7cc',    // Medium light tint
          'dark-300': '#9ea2aa',    // Medium tint
          'dark-400': '#6b7080',    // Medium
          'dark-500': '#4a4d5a',    // Medium dark
          'dark-600': '#3a3d47',    // Darker
          'dark': '#2d3142',        // Original dark
          'dark-700': '#252834',    // Much darker
          'dark-800': '#1d1f28',    // Very dark
          'dark-900': '#15161c',    // Darkest
          
          // Gold color variations
          'gold-50': '#fefcf3',     // Very light tint
          'gold-100': '#fef7e0',    // Light tint
          'gold-200': '#fdecc4',    // Medium light tint
          'gold-300': '#fbdc9d',    // Medium tint
          'gold-400': '#f8c876',    // Medium
          'gold-500': '#f5b94f',    // Medium dark
          'gold': '#F4C35A',        // Original gold
          'gold-600': '#e6a832',    // Darker
          'gold-700': '#c7912a',    // Much darker
          'gold-800': '#a87a22',    // Very dark
          'gold-900': '#8a631a',    // Darkest
          
          // Coral color variations
          'coral-50': '#fef6f4',    // Very light tint
          'coral-100': '#fde8e3',   // Light tint
          'coral-200': '#fbc5b8',   // Medium light tint
          'coral-300': '#f89d87',   // Medium tint
          'coral-400': '#f57556',   // Medium
          'coral': '#F16545',       // Original coral
          'coral-500': '#e54d25',   // Medium dark
          'coral-600': '#d4441f',   // Darker
          'coral-700': '#b8391a',   // Much darker
          'coral-800': '#9c2f15',   // Very dark
          'coral-900': '#802510',   // Darkest
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'sans': ['proxima-nova', 'system-ui', 'sans-serif'],
        'heading': ['proxima-nova', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 