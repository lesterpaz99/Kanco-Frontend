import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#deded2',
          DEFAULT: '#21212d',
          dark: '#21212d'
        },
        secondary: {
          light: '#d3d3c7',
          DEFAULT: '#2c2c38',
          dark: '#2c2c38'
        },
        cta: {
          light: '#9ba039',
          DEFAULT: '#645fc6',
          dark: '#645fc6'
        },
        text: {
          light: '#7b725e',
          DEFAULT: '#848da1',
          dark: '#848da1'
        },
        headings: {
          light: '#000',
          DEFAULT: '#fff',
          dark: '#fff'
        },
      }
    },
  },
  plugins: [],
}
export default config
