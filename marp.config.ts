import { defineConfig } from "@marp-team/marp-cli";

export default defineConfig({
  theme: "dist/index.css",
  lang: "ja-JP",
  html: true,
  allowLocalFiles: true,
  template: "bespoke",
  ogImage: "https://avatars.githubusercontent.com/u/44566328",
  inputDir: "examples",
  output: "dist",
  author: "Omochice",
});
