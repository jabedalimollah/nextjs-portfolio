import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        rockybilly: ["Rockybilly", "sans-serif"],
        bastliga_one: ["Bastliga_One", "sans-serif"],
        bidenatrial: ["Bidenatrial", "sans-serif"],
        rekalgera_regular: ["Rekalgera-Regular", "sans-serif"],
        aestera: ["Aestera", "sans-serif"],
      },
      dropShadow: {
        custom: "0 5px 10px rgba(14, 14, 0, 0.4)", // Custom shadow
        glow: "0 0 10px rgba(255, 255, 255, 0.8)", // Glow effect
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      rotate: {
        "360": "360deg",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
} satisfies Config;
