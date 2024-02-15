import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
  safelist: [
    {
      pattern:
        /(badge)-(neutral|primary|secondary|accent|ghost|info|success|warning|error|outline|lg|md|sm|xs)/,
    },
    {
      pattern:
        /(btn)-(neutral|primary|secondary|accent|info|success|warning|error|ghost|link)/,
    },
  ],
};
export default config;
