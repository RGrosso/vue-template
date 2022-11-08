import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  const inProduction = mode === "production";

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
        },
      },
      sourcemap: !inProduction,
      target: "esnext",
      minify: inProduction ? "esbuild" : false,
    },
    server: {
      port: 3333,
    },
  };
});
