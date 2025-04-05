import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/node_modules/**"], // Exclude node_modules from tests
    testTimeout: 20000, // Set a timeout for tests (10 seconds)
    globals: true, // Ensure Vitest globals are enabled
    environment: "node", // Make sure you're using a Node.js environment for tests
  },
});
