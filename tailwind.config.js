import tailwindTypography from "@tailwindcss/typography"
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography, daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave"],
  }
}

