import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'white-primary': '#FCFDFF',
        'blue-primary': '#313FB6',
      },
      textColor: {
        'white-primary': '#FCFDFF',
        'blue-primary': '#313FB6',
      },
      boxShadow: {
        choiceCardShadow: '0 0 6px 2px #DBE1E7',
        inputShadow: '0 0 6px 2px #2259C5',
      },
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
