import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      black: '#222222',
      white: '#FFFFFF',
      transparent: 'transparent',

      danger: '#EF4800',
      success: '#089728',
      warning: '#EFE612',
      highlight: '#197ECE',
      info: '#0DCAF0',
      neutral: '#F0F2F4',

      primary: {
        900: '#172554',
        800: '#213477',
        700: '#2A449A',
        600: '#3453BD',
        500: '#4F6DCF',
        400: '#728AD8',
        300: '#96A7E2',
        200: '#B9C4EC',
        100: '#DCE2F5',
      },
      secondary: {
        900: '#FEB71C',
        800: '#FEBF35',
        700: '#FEC74E',
        600: '#FECF68',
        500: '#FED781',
        400: '#FFDF9A',
        300: '#FFE7B3',
        200: '#FFEFCD',
        100: '#FFF7E6',
      },
      gray: {
        900: '#666666',
        800: '#777777',
        700: '#888888',
        600: '#999999',
        500: '#AAAAAA',
        400: '#BBBBBB',
        300: '#DDDDDD',
        200: '#EDEDED',
        100: '#F4F4F4',
      },

      bg: {
        1: '#EEF2F7',
      },

      dark: {
        1: '#111D44',
        2: '#444444',
        3: '#555555',
        4: '#6D376E',
      },
      light: {
        1: '#F0F0FF',
        2: '#F8F0FF',
        3: '#F9F9FF',
        4: '#F1F6FC',
        5: '#FFFEF1',
      },
      accent: {
        1: '#6988FF',
        2: '#7589F3',
        3: '#F8CC44',
        4: '#FB7701',
        5: '#FFB55C',
        6: '#EC7966',
        7: '#B74E72',
        8: '#00B38A',
        9: '#5CECC0',
      },
    },

    fontSize: {
      xs: '0.625rem',
      sm: ['0.75rem', '120%'], // h6
      label: ['0.875rem', '120%'], // h5
      base: ['1rem', '120%'], // h4

      lg: ['1.125rem', '120%'], // h3
      xl: ['1.25rem', '120%'], // h2
      '2xl': ['1.5rem', '120%'], // h1
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },

    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '600',
      extrabold: '800',
    },

    boxShadow: {
      sm: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
      DEFAULT: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      lg: '0px 4px 8px 0px rgba(0, 0, 0, 0.15)',
      xl: '0px 0px 15px 0px rgba(0, 0, 0, 0.20)',
      none: 'none',
    },

    screens: {
      sm: '640px', // @media (min-width: 640px) { ... }
      md: '768px', // @media (min-width: 768px) { ... }
      lg: '1024px', // @media (min-width: 1024px) { ... }
      xl: '1280px', // @media (min-width: 1280px) { ... }
      '2xl': '1536px', // @media (min-width: 1536px) { ... }
      '3xl': '1920px', // @media (min-width: 1920px) { ... }
    },

    extend: {
      zIndex: {
        '-1': '-1',
        '1': '1',
      },
      lineHeight: {
        '0': '0',
      },
      keyframes: {
        blink: {
          '0%, 100%': { color: 'currentColor' },
          '50%': { color: 'currentColor' },
          '55%': { color: 'white' },
          '60%': { color: 'currentColor' },
          '65%': { color: 'white' },
          '70%': { color: 'currentColor' },
        },
      },
      animation: {
        blink: 'blink 2s infinite',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    tailwindAnimate,
    plugin(function ({ addVariant, matchUtilities, theme }) {
      addVariant('nd', '&:not(:disabled)');

      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
export default config;
