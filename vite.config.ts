import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Specify your entry file
      name: "sharai-sdk-ts", // Name of the global variable if you're building a library
      fileName: (format) => `main.${format}.js`, // Output file naming convention
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ["axios"], // Example: don't bundle axios
      output: {
        globals: {
          axios: "axios", // Global variable name for externalized dependencies
        },
      },
    },
  },
});
