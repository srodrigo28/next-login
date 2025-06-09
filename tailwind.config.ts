import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapear corretamente as variáveis globais
        background: "var(--background)", // Cor de fundo
        foreground: "var(--foreground)", // Cor do texto principal
        primary: "var(--primary)", // Cor principal
        text: "var(--text-color)", // Cor do texto secundário
        secondary: "var(--secondary-color)", // Cor secundária
        grayBackground: "var(--gray-bg)", // Fundo cinza claro
        graySecondaryBackground: "var(--gray-secondary-bg)", // Fundo cinza secundário
        formBackground: "var(--form-bg)", // Fundo de formulários
      },
    },
  },
  plugins: [],
};

export default config;
