import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/theme'
const config: Config = {
  content: [
    './node_modules/@nextui-org/theme/dist/components/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        scrollerGrey: 'rgb(219,219,219)',
        lightGrey: 'rgb(227,227,227)',
        darkerGrey: 'rgb(200,200,200)',
        darkBlue: 'rgb(3,37,65)',
        lightBlue: 'rgb(1,180,228)',
        lighterGreen: 'rgb(192,254,207)',
        lightGreen: 'rgb(30,213,169)',
        logoGreen: 'rgb(144,206,161)',
        logoOrange: 'rgb(253,193,112)',
        logoRed: 'rgb(217,59,99)',
        accountSilver: 'rgb(149,149,149)',
        accountPink: 'rgb(234,20,140)',
        accountPurple: 'rgb(128,91,231)',
        accountGreen: 'rgb(1,210,119)',
        accountTeal: 'rgb(1,198,172)',
        accountLightBlue: '(1,180,228)',
        accountBlue: 'rgb(1,119,210)',
        accountOrange: '(rgb210,119,1)',
        accountYellow: 'rgb(210,144,1)',
        accountRed: 'rgb(212,2,66)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: 'rgb(3,37,65)'
        }
      },
      dark: {
        colors: {
          background: 'rgb(3,37,65)'
        }
      },
    }
  })],
}
export default config
