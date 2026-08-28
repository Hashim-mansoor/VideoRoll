import path from "node:path";
import { defineConfig } from "@rstest/core";

export default defineConfig({
  include: ["__tests__/**/*.test.ts"],
  exclude: { patterns: ["**/node_modules/**", "**/dist/**", "**/.addfox/**"] },
  testEnvironment: "node",
  root: process.cwd(),
  setupFiles: ["./__tests__/setup-webextension-polyfill.ts"],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      "webextension-polyfill": path.resolve(
        __dirname,
        "__tests__/__mocks__/webextension-polyfill.ts",
      ),
    },
  },
});
