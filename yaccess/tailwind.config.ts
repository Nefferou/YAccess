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
        'gradient-to-r-from-purple-to-deep-purple': 'linear-gradient(180deg, #414FCC 38.02%, rgba(34, 89, 197, 0.61) 100%)',
      },
      backgroundColor: {
        'white-primary': '#FCFDFF',
        'blue-primary': '#313FB6',
        'light-purple': '#E1E4FF',
      },
      textColor: {
        'white-primary': '#FCFDFF',
        'blue-primary': '#313FB6',
      },
      boxShadow: {
        choiceCardShadow: '0 0 6px 2px #DBE1E7',
        inputShadow: '0 0 6px 1px #2259C5',
        purpleButtonShadow: '1px 0px 4px 2px #d296ff',
        redButtonShadow: '1px 0px 4px 2px #ff8484',
        greyButtonShadow: '1px 0px 4px 2px #c6c5c5',
        inputShadow: '0 0 6px 2px #2259C5',
        modalShadow: '0 0 6px 2px #555555',
      },
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
