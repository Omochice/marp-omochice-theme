import type { Config } from 'tailwindcss'
import catppuccin from "@catppuccin/tailwindcss";

export default {
  plugins: [catppuccin({
    defaultFlavour: "mocha"
  })],
  content: ["./src/**/*.css"],
  safelist: [
    "flex"
  ],
} satisfies Config

