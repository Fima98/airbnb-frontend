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
        'airbnb': "#fc1c4a",
        // 'airbnb': "#FFC107",
        'airbnb-dark': "#e0183d",
      },
    },
  },
  plugins: [],
} satisfies Config;
