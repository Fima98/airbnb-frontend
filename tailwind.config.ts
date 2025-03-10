import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'airbnb': "#EC4C60",
        'airbnb': "#fc1c4a",
        'airbnb-dark': "#e0183d",
      },
    },
  },
  plugins: [],
} satisfies Config;
