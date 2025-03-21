/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 10s ease infinite", // Smooth animation with noticeable movement
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 80%" }, // Side-focused start and end
          "50%": { "background-position": "100% 100%" }, // Significant lateral movement
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      backgroundImage: {
        "dark-red-blue": `linear-gradient(
          120deg,
          black 60%,         /* Dominant black */
          darkred 75%,       /* Gradual fade to red */
          crimson 85%,       /* Smooth red highlight */
          darkblue 100%      /* Fades into dark blue */
        )`,
      },
    },
  },
  plugins: [],
};
