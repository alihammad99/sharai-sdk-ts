import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "sharai-sdk-ts",
      fileName: (format) => `sharai-sdk-ts.${format}.js`,
      formats: ["umd", "es"], // Include UMD and ES formats
    },
    rollupOptions: {
      external: ["axios"], // External dependencies
      output: {
        globals: {
          axios: "axios",
        },
      },
    },
    // Add additional build options if needed
  },
});
