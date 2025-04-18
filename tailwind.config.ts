import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode using a class
  theme: {
    extend: {}
  },
  plugins: [daisyui]
}

export default config
