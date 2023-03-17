
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [],
};

/* Build and Deploy a Full Stack MERN AI Image Generation App | Midjourney & DALL-E Clone
https://www.youtube.com/watch?v=EyIvuigqDoA&t=584s 

https://gist.github.com/adrianhajdin/b2264e1f443a0003d6947549b9e07ec5
*/