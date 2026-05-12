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
        serif: ['Instrument Serif', 'ui-serif', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        signal: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        terracotta: {
          50: '#fef6f3',
          100: '#fdeae3',
          200: '#fbd4c7',
          300: '#f7b39e',
          400: '#f18a6d',
          500: '#D4745E',
          600: '#c55a3e',
          700: '#a6442f',
          800: '#88392a',
          900: '#6f3327',
        },
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
            fontSize: '1.06rem',
            lineHeight: '1.9',
            maxWidth: '66ch',
            color: theme('colors.stone.800'),
            fontFamily: theme('fontFamily.sans').join(', '),
            '--tw-prose-body': theme('colors.stone.800'),
            '--tw-prose-headings': theme('colors.stone.950'),
            '--tw-prose-links': theme('colors.stone.900'),
            '--tw-prose-bold': theme('colors.stone.900'),
            '--tw-prose-counters': theme('colors.stone.500'),
            '--tw-prose-bullets': theme('colors.stone.500'),
            '--tw-prose-hr': theme('colors.stone.300'),
            '--tw-prose-quotes': theme('colors.stone.900'),
            '--tw-prose-quote-borders': theme('colors.stone.400'),
            '--tw-prose-code': theme('colors.stone.900'),
            '--tw-prose-code-bg': theme('colors.stone.100'),
            a: {
              color: theme('colors.stone.900'),
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '0.18em',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.signal.600'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '700',
              letterSpacing: '-0.02em',
              color: theme('colors.stone.950'),
              lineHeight: '1.15',
            },
            h2: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '700',
              letterSpacing: '-0.01em',
              color: theme('colors.stone.950'),
              marginTop: '2.4rem',
              marginBottom: '1rem',
            },
            h3: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '600',
              color: theme('colors.stone.900'),
            },
            h4: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '600',
              color: theme('colors.stone.800'),
            },
            code: {
              color: theme('colors.stone.900'),
              backgroundColor: theme('colors.stone.100'),
              border: `1px solid ${theme('colors.stone.300')}`,
              paddingLeft: '5px',
              paddingRight: '5px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0',
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
              backgroundColor: theme('colors.stone.950'),
              color: theme('colors.stone.100'),
              borderRadius: '0',
              padding: '1.5rem',
              border: `1px solid ${theme('colors.stone.700')}`,
              code: {
                backgroundColor: 'transparent',
                color: 'inherit',
                padding: 0,
                fontWeight: '400',
              },
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftColor: theme('colors.stone.700'),
              borderLeftWidth: '2px',
              color: theme('colors.stone.800'),
              paddingLeft: '1rem',
            },
            p: {
              marginTop: '0',
              marginBottom: '1.15rem',
            },
            li: {
              marginTop: '0.45rem',
              marginBottom: '0.45rem',
            },
            hr: {
              borderColor: theme('colors.stone.300'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.stone.300'),
            '--tw-prose-body': theme('colors.stone.300'),
            '--tw-prose-headings': theme('colors.stone.50'),
            '--tw-prose-links': theme('colors.stone.100'),
            '--tw-prose-bold': theme('colors.stone.50'),
            '--tw-prose-counters': theme('colors.stone.400'),
            '--tw-prose-bullets': theme('colors.stone.400'),
            '--tw-prose-hr': theme('colors.stone.700'),
            '--tw-prose-quotes': theme('colors.stone.100'),
            '--tw-prose-quote-borders': theme('colors.stone.600'),
            '--tw-prose-code': theme('colors.stone.100'),
            '--tw-prose-code-bg': theme('colors.stone.800'),
            a: {
              color: theme('colors.stone.100'),
              '&:hover': {
                color: theme('colors.signal.200'),
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
              color: theme('colors.stone.100'),
              backgroundColor: theme('colors.stone.800'),
              borderColor: theme('colors.stone.700'),
            },
            pre: {
              backgroundColor: '#090909',
              borderColor: theme('colors.stone.800'),
            },
            blockquote: {
              borderLeftColor: theme('colors.stone.500'),
              color: theme('colors.stone.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
