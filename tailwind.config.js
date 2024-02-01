/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
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
      colors: {
        primary: '#F5D042', 
      },
      fontFamily: {
        'PP Mori': [
          'PP Mori Regular',
          'PP Mori SemiBold',
          'PP Mori ExtraLight',
        ],
        sans: ['"PP Mori"', 'sans-serif']
      },
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }  
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }  
      }
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
    }
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          skills: {
              words: [' UI/UX Design', 'Prototyping', 'Graphic Design', 'Web Animation', ],
              delay: 0,
              writeSpeed: 0.2,
              pauseBetween: 1.5,
              eraseSpeed: 0.1,
          }
      }
  })
  ],
  
  
}
