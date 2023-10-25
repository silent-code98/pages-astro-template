/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B3764",
        secondary: "#FFCA42"

      },
      container: {
        center: true,
      }
    },
    fontFamily: {
      inter: ['Inter', 'ui-sans-serif', 'system-ui'],
      cardo: ['Cardo','ui-serif', 'Georgia']
    }
  },
  plugins: [],
};
