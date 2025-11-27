const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Wine/Burgundy accent
        wine: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a8b8',
          400: '#ec7591',
          500: '#e0496e',
          600: '#8b2635', // Main accent
          700: '#7a1f2d',
          800: '#661b28',
          900: '#571a26',
        },
        // Terracotta secondary
        terracotta: {
          50: '#fef6f3',
          100: '#fdeae3',
          200: '#fbd4c7',
          300: '#f7b39e',
          400: '#f18a6d',
          500: '#D4745E', // Main secondary
          600: '#c55a3e',
          700: '#a6442f',
          800: '#88392a',
          900: '#6f3327',
        },
        // Warm neutrals (stone)
        stone: colors.stone,
        primary: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a8b8',
          400: '#ec7591',
          500: '#e0496e',
          600: '#8b2635',
          700: '#7a1f2d',
          800: '#661b28',
          900: '#571a26',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '68ch',
            color: theme('colors.stone.700'),
            fontFamily: theme('fontFamily.sans').join(', '),
            '--tw-prose-body': theme('colors.stone.700'),
            '--tw-prose-headings': theme('colors.stone.900'),
            '--tw-prose-links': theme('colors.wine.600'),
            '--tw-prose-bold': theme('colors.stone.900'),
            '--tw-prose-counters': theme('colors.stone.500'),
            '--tw-prose-bullets': theme('colors.stone.500'),
            '--tw-prose-hr': theme('colors.stone.200'),
            '--tw-prose-quotes': theme('colors.stone.900'),
            '--tw-prose-quote-borders': theme('colors.wine.200'),
            '--tw-prose-code': theme('colors.wine.700'),
            '--tw-prose-code-bg': theme('colors.stone.100'),
            a: {
              color: theme('colors.wine.600'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.wine.700'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: theme('colors.stone.900'),
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: theme('colors.stone.900'),
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
              color: theme('colors.stone.900'),
            },
            h4: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
              color: theme('colors.stone.800'),
            },
            code: {
              color: theme('colors.wine.700'),
              backgroundColor: theme('colors.stone.100'),
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingTop: '3px',
              paddingBottom: '3px',
              borderRadius: '0.375rem',
              fontWeight: '500',
              fontFamily: theme('fontFamily.mono').join(', '),
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            pre: {
              backgroundColor: theme('colors.stone.900'),
              color: theme('colors.stone.100'),
              borderRadius: '0.75rem',
              padding: '1.5rem',
              border: `1px solid ${theme('colors.stone.800')}`,
              code: {
                backgroundColor: 'transparent',
                color: 'inherit',
                padding: 0,
                fontWeight: '400',
              },
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: theme('colors.wine.300'),
              borderLeftWidth: '3px',
              color: theme('colors.stone.800'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote',
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.stone.300'),
            '--tw-prose-body': theme('colors.stone.300'),
            '--tw-prose-headings': theme('colors.stone.50'),
            '--tw-prose-links': theme('colors.wine.400'),
            '--tw-prose-bold': theme('colors.stone.50'),
            '--tw-prose-counters': theme('colors.stone.400'),
            '--tw-prose-bullets': theme('colors.stone.400'),
            '--tw-prose-hr': theme('colors.stone.800'),
            '--tw-prose-quotes': theme('colors.stone.100'),
            '--tw-prose-quote-borders': theme('colors.wine.800'),
            '--tw-prose-code': theme('colors.wine.400'),
            '--tw-prose-code-bg': theme('colors.stone.800'),
            a: {
              color: theme('colors.wine.400'),
              '&:hover': {
                color: theme('colors.wine.300'),
              },
            },
            h1: {
              color: theme('colors.stone.50'),
            },
            h2: {
              color: theme('colors.stone.50'),
            },
            h3: {
              color: theme('colors.stone.100'),
            },
            h4: {
              color: theme('colors.stone.100'),
            },
            code: {
              color: theme('colors.wine.400'),
              backgroundColor: theme('colors.stone.800'),
            },
            pre: {
              backgroundColor: theme('colors.stone.950'),
              borderColor: theme('colors.stone.800'),
            },
            blockquote: {
              borderLeftColor: theme('colors.wine.700'),
              color: theme('colors.stone.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
