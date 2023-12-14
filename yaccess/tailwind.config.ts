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
        purpleButtonShadow: '1px 0px 4px 2px #d296ff',
        redButtonShadow: '1px 0px 4px 2px #ff8484',
        greyButtonShadow: '1px 0px 4px 2px #c6c5c5',
        inputShadow: '0 0 6px 2px #2259C5',
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
