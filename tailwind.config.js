import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        'cactus-classical-serif': ['Cactus Classical Serif', 'serif'],
        'lxgw-wenkai-tc': ['LXGW WenKai TC', 'cursive'],
        // Define 'karla' as a custom font family with 'Karla' as the primary font and fallback to 'sans-serif'
      },
    },
  },
  plugins: [nextui()],
}