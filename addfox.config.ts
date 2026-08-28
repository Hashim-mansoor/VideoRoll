import { defineConfig } from "addfox";
import vue from "@addfox/rsbuild-plugin-vue";
import { pluginLess } from "@rsbuild/plugin-less";

export default defineConfig({
  appDir: "src",
  entry: {
    background: "background/index.ts",
    content: "inject/index.ts",
    popup: { src: "popup/content/main.ts", html: "popup/index.html" },
    options: { src: "options/index.ts", html: "options/index.html" },
  },
  plugins: [vue(), pluginLess()],
  rsbuild: {
    dev: {
      // Extension pages run under chrome-extension:// and cannot reach the dev
      // server's lazy-compilation endpoint (defineAsyncComponent dynamic imports).
      lazyCompilation: false,
    },
    source: {
      alias: {
        src: "./src",
      },
    },
  },
});
